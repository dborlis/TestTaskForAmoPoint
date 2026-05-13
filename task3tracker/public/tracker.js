(function () {

    // TODO! THAT MUST BE REPLACED WITH REAL DOMAIN!
    //const endpoint = 'http://localhost:3000/track';
    const endpoint = '/track'; // USED FOR LOCAL OR "SAME DOMAIN" TESTING

    function sendVisit() {
        const data = {
            url: window.location.href,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };

        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(() => { });
    }

    sendVisit();
})();