export class Random {
    constructor(inclusive = true) {
        this.inclusive = inclusive;
    }

    /**
     * 
     * @param {Number} int the maximum value (inclusive)
     * @returns a number between 0 and int
     */
    nextInt(int) {
        return this.randint(0, int - (this.inclusive ? 0 : 1));
    }

    /**
     * 
     * @param {Number} min 
     * @param {Number} max 
     * @returns a number >= min and <= max
     */
    randint(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
    
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    intFromArray(array) {
        return this.nextInt(array.length - 1);
    }

    fromArray(array) {
        return array[this.intFromArray(array)];
    }

    randchance(array, chances) {
        let size = 0;
    
        for(let i = 0; i < array.length; i++) {   
            size += chances[i];
        }
    
        let random = new Random().nextInt(size);
        let probability = 0;
    
        for(let i = 0; i < array.length; i++) {   
            probability += chances[i];
    
            if(random <= probability) {
                return array[i];
            }
        }
        
        return array[0].randomize();
    }
}

export function randomUUID(length=36) {
    let res = "";

    let chars = "01234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("");

    let lists = [
        shuffle(chars),
        shuffle(chars),
        shuffle(chars),
        shuffle(chars)
    ];

    let dashes = 0;
    let nextDash = 8;

    while(res.length < length) {
        if(res.length == nextDash && res.length != 0) {
            res += "-";
            dashes++;
            nextDash += (8 + dashes);
        } else {
            let random = new Random().nextInt(chars.length - 1);

            let list = lists[new Random().nextInt(lists.length - 1)];

            res += list[random];
        }
    }

    return res;
}

function shuffle(array) {
    let res = [];
    
    array.forEach(e => {
        res.push(e);
    });

    for(let i = res.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * i);
        
        let a = res[i];
        let b = res[j];

        res[i] = b;
        res[j] = a;
    }

    return res;
}

export function isUUID(uuid) {
    return uuid.match("[0-9a-zA-Z]{8}(-{1}[0-9a-zA-Z]{8}){3}");
}

export const names = "Ayla Clements\nWanda Young\nAran Connor\nBridget Sweeney\nSonia Hurst\nCrystal Harrell\nLester Delacruz\nLeena Anthony\nMartina Austin\nSana Contreras\nMaisie Mendez\nGabriella Wood\nShayla Carson\nHenrietta Johnson\nAnish Delgado\nMurray Lozano\nVivian Waters\nAlexa Campos\nAlexandros Figueroa\nRhianna Haney\nRobert Hayden\nDawn Campbell\nTheodore Carpenter\nJude Soto\nMarie Shelton\nZayn Sims\nAbbas Meyers\nYoussef Whitaker\nMaja Cline\nWendy Gentry\nHaider Price\nDafydd Rich\nEva Kramer\nErika Lopez\nBella Solis\nSafa Carter\nLucian Thomas\nCohen Holder\nBeatrix Carroll\nEvangeline Harmon\nRafe Santos\nJazmine Alvarado\nBruce Griffith\nAnisa Fulton\nJack English\nIda Matthams\nNoor Kane\nRhodri Gillespie\nAaminah Skinner\nNiall George\nKajus Spencer\nBruno Winters\nOskar Finch\nDanielle Case\nCelia Odling\nTiana Burns\nMegan Higgins\nAudrey Howard\nJulie Douglas\nElisa Dickerson\nKrishan Hartman\nKaleb Norman\nBibi Mercado\nEleni Blaese\nIvan Osborne\nSapphire Jones\nKadie Dixon\nStacey Day\nLeonie Meyer\nTyrell Daugherty\nBridie Greer\nKyan Valentine\nLila Oconnell\nKain Ponce\nTim Owen\nKeaton Jennings\nSaarah Parrish\nJessie Schneider\nMahdi Parsons\nCallan Peters\nIsobelle Gordon\nRosemary Sloan\nNana Haynes\nMark Rubio\nPhoenix Salinas\nJuanita Fernandez\nKatelyn Barker\nAlbert Melton\nAngus Quinn\nChaya Mathis\nIsobel Rollins\nMarilyn Griffin\nEarl Yoder\nBrendon Hunt\nAliyah Lam\nAddie Graham\nGilbert Ayala\nRehan Rangel\nKristian Daniel\nHollie Mcpherson".split("\n");