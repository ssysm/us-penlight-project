/**
 * This is the script for seat selection
 * @interface Object userSeat
 */
//Seating Select
let levelSelect         = document.querySelector('#levelSelect'),
    flAreaSelect        = document.querySelector('#flAreaSelect'),
    rowSelect           = document.querySelector('#rowSelect'),
    sectionSelect       = document.querySelector('#sectionSelect');
//Form Wrapper
let flAreaSelectForm    = document.querySelector('#flAreaSelectForm'),
    rowSelectForm       = document.querySelector('#rowSelectForm'),
    sectionSelectForm   = document.querySelector('#sectionSelectForm');
//DOM Output elm
let aqurainbowColor     = document.querySelector('#aqurainbowColor'),
    no10rainbowColor    = document.querySelector('#no10rainbowColor'),
    kananrailColor      = document.querySelector('#kananrailColor'),
    yousoroadColor      = document.querySelector('#yousoroadColor');
//Pre-formatted text
let aqoursColorText = 
{
    Chika:  "<span class='chika-orange'>Chika</span>",
    You:    "<span class='you-blue'>You</span>",
    Riko:   "<span class='riko-pink'>Riko</span>",
    Maru:   "<span class='maru-yellow'>Hanamaru</span>",
    Ruby:   "<span class='ruby-pink'>Ruby</span>",
    Yoshiko:"<span class='yoshiko-gray'>Yoshiko</span>",
    Dia:    "<span class='dia-red'>Dia</span>",
    Kanan:  "<span class='kanan-green'>Kanan</span>",
    Mari:   "<span class='mari-purple'>Mari</span>"
}
let yousoroadColorText = "<span class='you-blue'>Show</span>";
let kananrailColorText = "<span class='kanan-green'>Show</span>";
let hideText = "<span>Hide</span>";
//Current User Selection
let userSeat = 
{
    levl: "F",
    section: "G",
    row:"101",
    area:"C"
};
//Event Handler
/**
 * Level process is handled after Level is Selected
 * @param {ChangeEvent} event F -> Floor B/Else -> Bal.
 */
function handleLevel(event)
{
    userSeat.seating = event.target.value;
    if(userSeat.seating == 'F')
    {
        aqurainbowColor.innerHTML = aqoursColorText.Mari;
        no10rainbowColor.innerHTML = aqoursColorText.Chika;
        rowSelectForm.classList.remove('show');
        rowSelectForm.classList.add('hide');
        sectionSelectForm.classList.remove('show');
        sectionSelectForm.classList.add('hide');
        flAreaSelectForm.classList.remove('hide');
        flAreaSelectForm.classList.add('show');
    }
    else
    {
        aqurainbowColor.innerHTML = null;
        no10rainbowColor.innerHTML = null;
        yousoroadColor.innerHTML = null;
        kananrailColor.innerHTML = null;
        flAreaSelectForm.classList.remove('show');
        flAreaSelectForm.classList.add('hide');
        rowSelectForm.classList.remove('hide');
        rowSelectForm.classList.add('show');
        sectionSelectForm.classList.remove('hide');
        sectionSelectForm.classList.add('show');
    }
}
/**
 * Floor Area Process is handled after Floor Level Section is selected
 * @param {ChangeEvent} event 
 */
function handleFlArea(event)
{
    userSeat.area = event.target.value;
    if(userSeat.area == 'C')
    {
        yousoroadColor.innerHTML = yousoroadColorText;
        kananrailColor.innerHTML = hideText;
    }
    if(userSeat.area == 'S')
    {
        yousoroadColor.innerHTML = hideText;
        kananrailColor.innerHTML = kananrailColorText;
    }
}
/**
 * Row Select Process is handled after Row is being selected
 * @param {ChangeEvent} event Row Number
 */
function handleRow(event)
{
    userSeat.row = event.target.value;
    switch(userSeat.row)
    {
        case 'AA':
            aqurainbowColor.innerHTML = aqoursColorText.Kanan;
            no10rainbowColor.innerHTML = aqoursColorText.You;
            break;
        case 'BB':
            aqurainbowColor.innerHTML = aqoursColorText.Kanan;
            no10rainbowColor.innerHTML = aqoursColorText.You;
            break;
        case 'CC':
            aqurainbowColor.innerHTML = aqoursColorText.Kanan;
            no10rainbowColor.innerHTML = aqoursColorText.You;
            break;
        case 'DD':
            aqurainbowColor.innerHTML =  aqoursColorText.Dia;
            no10rainbowColor.innerHTML = aqoursColorText.Riko;
            break;
        case 'EE':
            aqurainbowColor.innerHTML =  aqoursColorText.Dia;
            no10rainbowColor.innerHTML = aqoursColorText.Riko;
            break;
        case 'A':
            aqurainbowColor.innerHTML =  aqoursColorText.Yoshiko;
            no10rainbowColor.innerHTML = aqoursColorText.Maru;
            break;
        case 'B':
            aqurainbowColor.innerHTML =  aqoursColorText.Yoshiko;
            no10rainbowColor.innerHTML = aqoursColorText.Maru;
            break;
        case 'C':
            aqurainbowColor.innerHTML =  aqoursColorText.Ruby;
            no10rainbowColor.innerHTML = aqoursColorText.Ruby;
            break;
        case 'D':
            aqurainbowColor.innerHTML =  aqoursColorText.Ruby;
            no10rainbowColor.innerHTML = aqoursColorText.Ruby;
            break;
        case 'E':
            aqurainbowColor.innerHTML =  aqoursColorText.Maru;
            no10rainbowColor.innerHTML = aqoursColorText.Yoshiko;
            break;
        case 'F':
            aqurainbowColor.innerHTML =  aqoursColorText.Maru;
            no10rainbowColor.innerHTML = aqoursColorText.Yoshiko;
            break;
        case 'G':
            aqurainbowColor.innerHTML =  aqoursColorText.Riko;
            no10rainbowColor.innerHTML = aqoursColorText.Dia;
            break;
        case 'H':
            aqurainbowColor.innerHTML =  aqoursColorText.Riko;
            no10rainbowColor.innerHTML = aqoursColorText.Dia;
            break;
        case 'J':
            aqurainbowColor.innerHTML =  aqoursColorText.You;
            no10rainbowColor.innerHTML = aqoursColorText.Kanan;
            break;
        case 'K':
            aqurainbowColor.innerHTML =  aqoursColorText.You;
            no10rainbowColor.innerHTML = aqoursColorText.Kanan;
            break;
        case 'L':
            aqurainbowColor.innerHTML =  aqoursColorText.Chika;
            no10rainbowColor.innerHTML = aqoursColorText.Mari;
            break;
        case 'M':
            aqurainbowColor.innerHTML =  aqoursColorText.Chika;
            no10rainbowColor.innerHTML = aqoursColorText.Mari;
            break;
        case 'N':
            aqurainbowColor.innerHTML =  aqoursColorText.Chika;
            no10rainbowColor.innerHTML = aqoursColorText.Mari;
            break;
        default:
            aqurainbowColor.innerHTML = null;
            no10rainbowColor.innerHTML = null;
            break;
    }
}
/**
 * Section Process is handled after Section of Bal. is being selected
 * @param {ChangeEvent} event 101/201/301
 */
function handleSection(event)
{
    userSeat.section = event.target.value;
    switch(userSeat.section)
    {
        case '101':
            yousoroadColor.innerHTML = hideText;
            kananrailColor.innerHTML = kananrailColorText;
            break;
        case '201':
            yousoroadColor.innerHTML = yousoroadColorText;
            kananrailColor.innerHTML = hideText;
            break;
        case '301':
            yousoroadColor.innerHTML = hideText;
            kananrailColor.innerHTML = kananrailColorText;
            break;
        default:
            break;
    }
}

//Event Hook
levelSelect.addEventListener('change',handleLevel);
flAreaSelect.addEventListener('change',handleFlArea);
rowSelect.addEventListener('change',handleRow);
sectionSelect.addEventListener('change',handleSection);