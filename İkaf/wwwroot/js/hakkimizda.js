document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        tabButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tabId);
        });

        tabContents.forEach(content => {
            if(content.id === `${tabId}-content`) {
                content.classList.add('active');
                content.style.opacity = '0';
                setTimeout(() => content.style.opacity = '1', 50);
            } else {
                content.classList.remove('active');
            }
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    // Sosyal medya paylaşım işlevselliği
    document.querySelectorAll('.share-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = icon.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl;
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
                    break;
            }
            
            window.open(shareUrl, 'share', 
                'width=600,height=400,location=no,menubar=no,toolbar=no,status=no,scrollbars=yes'
            );
        });
    });

    switchTab('ikaf');
});
