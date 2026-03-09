// Language Toggle
let currentLang = 'te';

const translations = {
    'save-date': { en: 'SAVE THE DATE', te: 'తేదీని గుర్తుంచుకోండి' },
    'title': { en: 'We cordially invite you to our wedding celebration', te: 'మా వివాహ వేడుకకు మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము' },
    'invitation': { en: 'Together with their families, request the honor of your presence at the celebration of their marriage', te: 'మా కుటుంబాలతో కలిసి, మా వివాహ వేడుకలో పాల్గొనమని మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము' },
    'wedding': { en: 'Wedding Ceremony', te: 'వివాహ వేడుక' },
    'date1': { en: 'Thursday, April 3rd 2026', te: 'గురువారం, ఏప్రిల్ 3, 2026' },
    'ceremony': { en: 'Ceremony at 8:45 PM', te: 'వేడుక సమయం రాత్రి 8:45' },
    'dinner': { en: 'Dinner at 7:00 PM', te: 'విందు సమయం సాయంత్రం 7:00' },
    'venue1': { en: 'N Convention', te: 'ఎన్ కన్వెన్షన్' },
    'reception': { en: 'Reception', te: 'రిసెప్షన్' },
    'date2': { en: 'Saturday, April 5th 2026', te: 'శనివారం, ఏప్రిల్ 5, 2026' },
    'lunch': { en: 'Lunch at 12:00 PM', te: 'భోజనం మధ్యాహ్నం 12:00' },
    'venue2': { en: 'Zilla Parishad Convention Hall', te: 'జిల్లా పరిషత్ కన్వెన్షన్ హాల్' },
    'location': { en: 'View Location', te: 'స్థలం చూడండి' },
    'countdown': { en: 'Counting Down To The Big Day', te: 'మా ముఖ్య రోజుకు కౌంట్డౌన్' },
    'journey': { en: 'Our Journey', te: 'మా ప్రయాణం' },
    'venues': { en: 'Venue Locations', te: 'వేదిక స్థలాలు' },
    'footer': { en: 'Looking forward to celebrating with you!', te: 'మీతో జరుపుకోవడానికి ఎదురు చూస్తున్నాము!' }
};

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'te' ? 'en' : 'te';
    document.getElementById('langToggle').textContent = currentLang === 'te' ? 'EN' : 'తె';
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[key]) {
            el.textContent = el.innerHTML.includes('<i') ? 
                el.innerHTML.replace(/>[^<]+</, `>${translations[key][currentLang]}<`) : 
                translations[key][currentLang];
        }
    });
});
