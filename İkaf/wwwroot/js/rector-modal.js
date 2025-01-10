document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('rectorModal');
    const rectorButton = document.getElementById('rectorButton');

    // Daha önce kapatılmış mı kontrol et
    const isHidden = localStorage.getItem('rectorButtonHidden');
    if (isHidden) {
        rectorButton.style.display = 'none';
    }

    // Modal açma fonksiyonu
    window.openRectorModal = function () {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // Modal kapatma fonksiyonu
    window.closeRectorModal = function () {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    // Rektör butonunu gizleme fonksiyonu
    window.hideRectorButton = function () {
        rectorButton.style.display = 'none';
        localStorage.setItem('rectorButtonHidden', 'true');
    };

    // Sayfa yüklendiğinde localStorage'ı temizle
    window.addEventListener('load', function () {
        localStorage.removeItem('rectorButtonHidden');
        rectorButton.style.display = 'flex';
    });

    // Dışarı tıklama ile modal kapatma
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeRectorModal();
            }
        });
    }

    // ESC tuşu ile modal kapatma
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeRectorModal();
        }
    });
});