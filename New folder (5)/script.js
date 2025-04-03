const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});
   document.addEventListener('DOMContentLoaded', () => {
const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        aboutSection.classList.add('highlight');
        setTimeout(() => {
            aboutSection.classList.remove('highlight');
        }, 3000);
    }
};

const handleScrollPrice = () => {
    const priceSection = document.getElementById('price');
    if (priceSection) {
        priceSection.scrollIntoView({ behavior: 'smooth' });
        priceSection.classList.add('highlight');
        setTimeout(() => {
            priceSection.classList.remove('highlight');
        }, 3000);
    }
};

const handleScrollPERCENTAGE = () => {
    const percentageSection = document.getElementById('PERCENTAGE');
    if (percentageSection) {
        percentageSection.scrollIntoView({ behavior: 'smooth' });
        percentageSection.classList.add('highlight');
        setTimeout(() => {
            percentageSection.classList.remove('highlight');
        }, 3000);
    }
};

    document.querySelector('.li-nav:nth-child(1)').addEventListener('click', handleScrollPrice);
    document.querySelector('.li-nav:nth-child(2)').addEventListener('click', handleScrollPERCENTAGE);
    document.querySelector('.li-nav:nth-child(3)').addEventListener('click', handleScroll);
});

document.getElementById('call-link').addEventListener('click', function() {
    window.location.href = 'tel:09158323044';
});