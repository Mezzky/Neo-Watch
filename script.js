const deg = 6,
    hr = document.querySelector('#hr'),
    mn = document.querySelector('#mn'),
    sc = document.querySelector('#sc');

    setInterval(() =>{
        let day = new Date(),
        hh = day.getHours() * 30,
        mm = day.getMinutes() * deg,
        ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    })