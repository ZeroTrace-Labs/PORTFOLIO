document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('articleContent');
    const slug = new URLSearchParams(window.location.search).get('slug');
    const article = window.blogArticles?.find(item => item.slug === slug);

    if (!container) return;

    if (!article) {
        document.title = 'Article not found | Morgan Mutugi';
        container.innerHTML = '<h1>Article not found</h1><p>The requested article is unavailable. Return to the <a href="index.html#blog">publication list</a>.</p>';
        return;
    }

    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
    const renderInlineText = value => escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
    const text = [
        article.title,
        article.excerpt,
        ...article.sections.flatMap(section => [
            section.heading,
            ...section.paragraphs,
            ...(section.list || [])
        ])
    ].join(' ');
    const readingTime = Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200));
    const published = new Date(`${article.published}T00:00:00Z`);
    const displayDate = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    }).format(published);

    container.innerHTML = `
        <div class="article-header">
            <p class="article-kicker">${escapeHtml(article.category)}</p>
            <h1>${escapeHtml(article.title)}</h1>
            <p class="article-deck">${escapeHtml(article.excerpt)}</p>
            <div class="article-meta">
                <span>By Morgan Mutugi</span>
                <time datetime="${escapeHtml(article.published)}">${displayDate}</time>
                <span>${readingTime} min read</span>
            </div>
        </div>
        <div class="article-body">
            ${article.sections.map((section, index) => `
                <section class="article-section">
                    <span class="article-number">${String(index + 1).padStart(2, '0')}</span>
                    <div>
                        <h2>${escapeHtml(section.heading)}</h2>
                        ${section.paragraphs.map(paragraph => `<p>${renderInlineText(paragraph)}</p>`).join('')}
                        ${section.list ? `<ul class="article-list">${section.list.map(item => `<li>${renderInlineText(item)}</li>`).join('')}</ul>` : ''}
                        ${section.code ? `<figure class="article-code">
                            <pre><code>${escapeHtml(section.code)}</code></pre>
                            <figcaption>${escapeHtml(section.codeCaption)}</figcaption>
                        </figure>` : ''}
                    </div>
                </section>
            `).join('')}
            <section class="article-references" aria-labelledby="articleReferencesHeading">
                <h2 id="articleReferencesHeading">References</h2>
                <ul>${article.references.map(reference => `<li><a href="${escapeHtml(reference.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.label)}</a></li>`).join('')}</ul>
            </section>
        </div>
        <footer class="article-author">
            <div>
                <span class="author-label">Author</span>
                <strong>Morgan Mutugi</strong>
                <span>Cybersecurity and technical learning notes.</span>
            </div>
            <a class="article-back-link" href="index.html#blog">Back to all publications</a>
        </footer>
    `;
    document.title = `${article.title} | Morgan Mutugi`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', article.excerpt);
});
