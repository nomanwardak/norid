document.addEventListener('DOMContentLoaded', () => {
    const graphicDesignBtn = document.getElementById('graphicDesignBtn');
    const websiteCreationBtn = document.getElementById('websiteCreationBtn');
    const graphicDesignServicesContainer = document.getElementById('graphicDesignServicesContainer');
    const websiteCreationServicesContainer = document.getElementById('websiteCreationServicesContainer');

    graphicDesignBtn.addEventListener('click', () => {
        websiteCreationBtn.classList.remove('active');
        graphicDesignBtn.classList.add('active');

        websiteCreationServicesContainer.classList.remove('active');
        graphicDesignServicesContainer.classList.add('active');
    });

    websiteCreationBtn.addEventListener('click', () => {
        graphicDesignBtn.classList.remove('active');
        websiteCreationBtn.classList.add('active');

        graphicDesignServicesContainer.classList.remove('active');
        websiteCreationServicesContainer.classList.add('active');
    });
});
