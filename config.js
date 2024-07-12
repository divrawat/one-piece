
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.onepiecemanga.in.net';
export const IMAGES_DOMAIN = "https://images.onepiecemanga.in.net/one-piece/chapter";




export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>One Piece</u></a> is a Japanese anime about Monkey D. Luffy, a young pirate with rubber-like abilities gained from a Devil Fruit. He dreams of becoming the Pirate King by finding the legendary treasure, One Piece. Luffy gathers a diverse crew, the Straw Hat Pirates, and together they face powerful enemies and explore the perilous Grand Line, experiencing action, adventure, and humor along the way.`;


export const MANGA_NAME = 'One Piece';
export const MANGA_AUTHOR = 'Eiichiro Oda';
export const MANGA_RELEASE = '1997';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Eiichiro Oda';
export const MANGA_STUDIO = 'Toei Animation ';
export const MANGA_GENRE = 'Action, Adventure, Drama, Shonen, Supernatural';

export const CHAPTER_PREFIX = 'one-piece-chapter';
export const IMAGE_PREFIX = 'images/one-piece';
export const NEXT_PREVIOUS_PREFIX = 'manga/one-piece-chapter';
export const URL_PREFIX = 'manga/one-piece-chapter';
export const AUTHOR_PAGE = `${DOMAIN}/one-piece-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://www.playbite.com/wp-content/uploads/sites/3/2024/04/one-piece-template-1.png";


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[210px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'One Piece';
export const NavbarName = "One Piece";

export const APP_DESCRIPTION = `Read ${MANGA_NAME} manga online at ${DOMAIN}. The story follows Monkey D. Luffy, a spirited and ambitious young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. Inspired by his childhood hero, the pirate Red-Haired Shanks, Luffy sets off on a journey to find the legendary One Piece, the ultimate treasure of the Grand Line, which would make him the Pirate King.`;

export const DISQUS_SHORTNAME = "my-cms-7";
export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "One Piece is a Japanese anime series based on the manga of the same name written and illustrated by Eiichiro Oda. The story follows Monkey D. Luffy, a spirited and ambitious young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. Inspired by his childhood hero, the pirate Red-Haired Shanks, Luffy sets off on a journey to find the legendary One Piece, the ultimate treasure of the Grand Line, which would make him the Pirate King."
    },
    {
        id: 2,
        content: "Luffy begins his adventure alone but soon gathers a diverse crew, known as the Straw Hat Pirates. Each member has their own dream and unique abilities. His first recruit is Roronoa Zoro, a swordsman with a goal of becoming the world's greatest. Nami, a skilled navigator with a deep knowledge of cartography, joins next. She is followed by Usopp, a sniper with a penchant for tall tales, and Sanji, a chivalrous chef. Each of these early recruits has a rich backstory that adds depth to the narrative."
    },
    {
        id: 3,
        content: "As they journey through the perilous Grand Line, the Straw Hat Pirates encounter numerous challenges and enemies, including the powerful and corrupt World Government and the dangerous Shichibukai, or Seven Warlords of the Sea. They also face other pirate crews, each with their own ambitions and unique powers, often derived from consuming various Devil Fruits. These encounters test their resolve, strength, and the bonds between them."
    },
    {
        id: 4,
        content: "The world of One Piece is expansive and intricately detailed, featuring a wide array of islands, each with its own distinct culture and geography. Key locations include Alabasta, where they help a princess save her kingdom from a war incited by the cunning warlord Crocodile, and Skypiea, a sky island with ancient ruins and a deep connection to the series' lore. The Grand Line itself is a treacherous sea route filled with unpredictable weather and monstrous sea creatures, adding to the peril of their journey."
    },
    {
        id: 5,
        content: "Throughout their adventures, the Straw Hat Pirates gain new allies and crewmates, such as Tony Tony Chopper, a reindeer who becomes their doctor after consuming a Human-Human Fruit, and Nico Robin, an archaeologist seeking the true history of the world. Franky, a cyborg shipwright, and Brook, a living skeleton with a musician's soul, also join the crew, each bringing their own skills and dreams. The addition of Jinbe, a fish-man and master of Fish-Man Karate, rounds out the diverse crew."
    },
    {
        id: 6,
        content: "One Piece is not just a tale of adventure but also one of friendship, dreams, and the relentless pursuit of freedom. It explores themes of justice, the consequences of ambition, and the importance of heritage and history. With its richly woven plot, memorable characters, and blend of humor, action, and emotional depth, One Piece has captured the hearts of millions around the world, making it one of the most beloved and enduring anime series ever created."
    }
];

export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];



export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran Manga',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man Manga',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen Manga',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man Manga',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei Manga',
        link: 'https://www.mushokutenseimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-piece.webp`,
        title: 'One Piece Manga',
        link: 'https://www.onepiecemanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jinx.webp`,
        title: 'Jinx Manga',
        link: 'https://www.jinxmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/boruto.webp`,
        title: 'Boruto Manga',
        link: 'https://www.borutomanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/demon-slayer.webp`,
        title: 'Demon Slayer Manga',
        link: 'https://www.demonslayermanga.in.net',
    },

    /*
    {
        imageUrl: `${DOMAIN}/related/my-dress-up-darling.webp`,
        title: 'My Dress Up Darling Manga',
        link: 'https://www.mydressupdarlingmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/blue-lock.webp`,
        title: 'Blue Lock Manga',
        link: 'https://www.bluelockmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/solo-leveling.webp`,
        title: 'Solo Leveling Manga',
        link: 'https://www.sololevelingimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/my-hero-academia.webp`,
        title: 'My Hero Academia Manga',
        link: 'https://www.myheroacademiamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga Manga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover Manga',
        link: 'https://www.blackclovermanga.in.net',
    },
*/

];


export const chaptersData = [
    {
        "chapterNumber": "0",
        "numImages": 51
    },

    {
        "chapterNumber": "1",
        "numImages": 54
    },
    {
        "chapterNumber": "1a",
        "numImages": 50
    },
    {
        "chapterNumber": "1b",
        "numImages": 46
    },
    {
        "chapterNumber": "2",
        "numImages": 23
    },
    {
        "chapterNumber": "2b",
        "numImages": 23
    },
    {
        "chapterNumber": "3",
        "numImages": 21
    },
    {
        "chapterNumber": "4",
        "numImages": 19
    },
    {
        "chapterNumber": "5",
        "numImages": 20
    },
    {
        "chapterNumber": "5a",
        "numImages": 20
    },
    {
        "chapterNumber": "6",
        "numImages": 22
    },
    {
        "chapterNumber": "7",
        "numImages": 21
    },
    {
        "chapterNumber": "8",
        "numImages": 19
    },
    {
        "chapterNumber": "8a",
        "numImages": 20
    },
    {
        "chapterNumber": "9",
        "numImages": 28
    },
    {
        "chapterNumber": "10",
        "numImages": 24
    },
    {
        "chapterNumber": "11",
        "numImages": 20
    },
    {
        "chapterNumber": "12",
        "numImages": 22
    },
    {
        "chapterNumber": "13",
        "numImages": 20
    },
    {
        "chapterNumber": "14",
        "numImages": 19
    },
    {
        "chapterNumber": "15",
        "numImages": 20
    },
    {
        "chapterNumber": "16",
        "numImages": 18
    },
    {
        "chapterNumber": "17",
        "numImages": 24
    },
    {
        "chapterNumber": "18",
        "numImages": 27
    },
    {
        "chapterNumber": "19",
        "numImages": 20
    },
    {
        "chapterNumber": "19a",
        "numImages": 31
    },
    {
        "chapterNumber": "20",
        "numImages": 20
    },
    {
        "chapterNumber": "21",
        "numImages": 20
    },
    {
        "chapterNumber": "22",
        "numImages": 30
    },
    {
        "chapterNumber": "23",
        "numImages": 20
    },
    {
        "chapterNumber": "24",
        "numImages": 20
    },
    {
        "chapterNumber": "25",
        "numImages": 20
    },
    {
        "chapterNumber": "26",
        "numImages": 20
    },
    {
        "chapterNumber": "27",
        "numImages": 27
    },
    {
        "chapterNumber": "28",
        "numImages": 19
    },
    {
        "chapterNumber": "29",
        "numImages": 22
    },
    {
        "chapterNumber": "30",
        "numImages": 20
    },
    {
        "chapterNumber": "31",
        "numImages": 20
    },
    {
        "chapterNumber": "32",
        "numImages": 20
    },
    {
        "chapterNumber": "33",
        "numImages": 20
    },
    {
        "chapterNumber": "34",
        "numImages": 20
    },
    {
        "chapterNumber": "35",
        "numImages": 22
    },
    {
        "chapterNumber": "36",
        "numImages": 28
    },
    {
        "chapterNumber": "37",
        "numImages": 20
    },
    {
        "chapterNumber": "38",
        "numImages": 22
    },
    {
        "chapterNumber": "39",
        "numImages": 20
    },
    {
        "chapterNumber": "40",
        "numImages": 18
    },
    {
        "chapterNumber": "41",
        "numImages": 19
    },
    {
        "chapterNumber": "42",
        "numImages": 20
    },
    {
        "chapterNumber": "43",
        "numImages": 20
    },
    {
        "chapterNumber": "44",
        "numImages": 21
    },
    {
        "chapterNumber": "45",
        "numImages": 27
    },
    {
        "chapterNumber": "46",
        "numImages": 20
    },
    {
        "chapterNumber": "47",
        "numImages": 19
    },
    {
        "chapterNumber": "48",
        "numImages": 19
    },
    {
        "chapterNumber": "49",
        "numImages": 18
    },
    {
        "chapterNumber": "50",
        "numImages": 20
    },
    {
        "chapterNumber": "51",
        "numImages": 20
    },
    {
        "chapterNumber": "52",
        "numImages": 21
    },
    {
        "chapterNumber": "53",
        "numImages": 21
    },
    {
        "chapterNumber": "54",
        "numImages": 27
    },
    {
        "chapterNumber": "55",
        "numImages": 20
    },
    {
        "chapterNumber": "56",
        "numImages": 22
    },
    {
        "chapterNumber": "57",
        "numImages": 20
    },
    {
        "chapterNumber": "58",
        "numImages": 20
    },
    {
        "chapterNumber": "59",
        "numImages": 20
    },
    {
        "chapterNumber": "60",
        "numImages": 20
    },
    {
        "chapterNumber": "61",
        "numImages": 21
    },
    {
        "chapterNumber": "62",
        "numImages": 19
    },
    {
        "chapterNumber": "63",
        "numImages": 26
    },
    {
        "chapterNumber": "64",
        "numImages": 19
    },
    {
        "chapterNumber": "65",
        "numImages": 37
    },
    {
        "chapterNumber": "66",
        "numImages": 19
    },
    {
        "chapterNumber": "67",
        "numImages": 19
    },
    {
        "chapterNumber": "68",
        "numImages": 20
    },
    {
        "chapterNumber": "69",
        "numImages": 21
    },
    {
        "chapterNumber": "70",
        "numImages": 21
    },
    {
        "chapterNumber": "71",
        "numImages": 19
    },
    {
        "chapterNumber": "72",
        "numImages": 27
    },
    {
        "chapterNumber": "73",
        "numImages": 20
    },
    {
        "chapterNumber": "74",
        "numImages": 20
    },
    {
        "chapterNumber": "75",
        "numImages": 20
    },
    {
        "chapterNumber": "76",
        "numImages": 20
    },
    {
        "chapterNumber": "77",
        "numImages": 20
    },
    {
        "chapterNumber": "78",
        "numImages": 20
    },
    {
        "chapterNumber": "79",
        "numImages": 19
    },
    {
        "chapterNumber": "80",
        "numImages": 20
    },
    {
        "chapterNumber": "81",
        "numImages": 19
    },
    {
        "chapterNumber": "82",
        "numImages": 26
    },
    {
        "chapterNumber": "83",
        "numImages": 20
    },
    {
        "chapterNumber": "84",
        "numImages": 20
    },
    {
        "chapterNumber": "85",
        "numImages": 20
    },
    {
        "chapterNumber": "86",
        "numImages": 22
    },
    {
        "chapterNumber": "87",
        "numImages": 20
    },
    {
        "chapterNumber": "88",
        "numImages": 20
    },
    {
        "chapterNumber": "89",
        "numImages": 20
    },
    {
        "chapterNumber": "90",
        "numImages": 19
    },
    {
        "chapterNumber": "91",
        "numImages": 27
    },
    {
        "chapterNumber": "92",
        "numImages": 20
    },
    {
        "chapterNumber": "93",
        "numImages": 19
    },
    {
        "chapterNumber": "94",
        "numImages": 19
    },
    {
        "chapterNumber": "95",
        "numImages": 20
    },
    {
        "chapterNumber": "96",
        "numImages": 19
    },
    {
        "chapterNumber": "97",
        "numImages": 20
    },
    {
        "chapterNumber": "98",
        "numImages": 20
    },
    {
        "chapterNumber": "99",
        "numImages": 24
    },
    {
        "chapterNumber": "100",
        "numImages": 32
    },
    {
        "chapterNumber": "101",
        "numImages": 19
    },
    {
        "chapterNumber": "102",
        "numImages": 18
    },
    {
        "chapterNumber": "103",
        "numImages": 40
    },
    {
        "chapterNumber": "104",
        "numImages": 20
    },
    {
        "chapterNumber": "104a",
        "numImages": 20
    },
    {
        "chapterNumber": "105",
        "numImages": 20
    },
    {
        "chapterNumber": "106",
        "numImages": 19
    },
    {
        "chapterNumber": "107",
        "numImages": 37
    },
    {
        "chapterNumber": "108",
        "numImages": 21
    },
    {
        "chapterNumber": "109",
        "numImages": 26
    },
    {
        "chapterNumber": "110",
        "numImages": 19
    },
    {
        "chapterNumber": "111",
        "numImages": 19
    },
    {
        "chapterNumber": "112",
        "numImages": 19
    },
    {
        "chapterNumber": "113",
        "numImages": 20
    },
    {
        "chapterNumber": "114",
        "numImages": 19
    },
    {
        "chapterNumber": "115",
        "numImages": 19
    },
    {
        "chapterNumber": "116",
        "numImages": 18
    },
    {
        "chapterNumber": "117",
        "numImages": 26
    },
    {
        "chapterNumber": "118",
        "numImages": 19
    },
    {
        "chapterNumber": "119",
        "numImages": 19
    },
    {
        "chapterNumber": "120",
        "numImages": 19
    },
    {
        "chapterNumber": "121",
        "numImages": 19
    },
    {
        "chapterNumber": "122",
        "numImages": 19
    },
    {
        "chapterNumber": "123",
        "numImages": 19
    },
    {
        "chapterNumber": "124",
        "numImages": 19
    },
    {
        "chapterNumber": "125",
        "numImages": 19
    },
    {
        "chapterNumber": "126",
        "numImages": 19
    },
    {
        "chapterNumber": "127",
        "numImages": 21
    },
    {
        "chapterNumber": "128",
        "numImages": 22
    },
    {
        "chapterNumber": "129",
        "numImages": 20
    },
    {
        "chapterNumber": "130",
        "numImages": 20
    },
    {
        "chapterNumber": "131",
        "numImages": 20
    },
    {
        "chapterNumber": "132",
        "numImages": 20
    },
    {
        "chapterNumber": "133",
        "numImages": 23
    },
    {
        "chapterNumber": "134",
        "numImages": 20
    },
    {
        "chapterNumber": "135",
        "numImages": 20
    },
    {
        "chapterNumber": "136",
        "numImages": 21
    },
    {
        "chapterNumber": "137",
        "numImages": 20
    },
    {
        "chapterNumber": "138",
        "numImages": 19
    },
    {
        "chapterNumber": "139",
        "numImages": 19
    },
    {
        "chapterNumber": "140",
        "numImages": 19
    },
    {
        "chapterNumber": "141",
        "numImages": 19
    },
    {
        "chapterNumber": "142",
        "numImages": 19
    },
    {
        "chapterNumber": "143",
        "numImages": 19
    },
    {
        "chapterNumber": "144",
        "numImages": 19
    },
    {
        "chapterNumber": "145",
        "numImages": 19
    },
    {
        "chapterNumber": "146",
        "numImages": 19
    },
    {
        "chapterNumber": "147",
        "numImages": 18
    },
    {
        "chapterNumber": "148",
        "numImages": 19
    },
    {
        "chapterNumber": "149",
        "numImages": 18
    },
    {
        "chapterNumber": "150",
        "numImages": 19
    },
    {
        "chapterNumber": "151",
        "numImages": 18
    },
    {
        "chapterNumber": "152",
        "numImages": 17
    },
    {
        "chapterNumber": "153",
        "numImages": 17
    },
    {
        "chapterNumber": "154",
        "numImages": 19
    },
    {
        "chapterNumber": "155",
        "numImages": 18
    },
    {
        "chapterNumber": "156",
        "numImages": 18
    },
    {
        "chapterNumber": "157",
        "numImages": 17
    },
    {
        "chapterNumber": "158",
        "numImages": 19
    },
    {
        "chapterNumber": "159",
        "numImages": 18
    },
    {
        "chapterNumber": "160",
        "numImages": 18
    },
    {
        "chapterNumber": "161",
        "numImages": 18
    },
    {
        "chapterNumber": "162",
        "numImages": 18
    },
    {
        "chapterNumber": "163",
        "numImages": 17
    },
    {
        "chapterNumber": "164",
        "numImages": 19
    },
    {
        "chapterNumber": "165",
        "numImages": 18
    },
    {
        "chapterNumber": "166",
        "numImages": 19
    },
    {
        "chapterNumber": "167",
        "numImages": 19
    },
    {
        "chapterNumber": "168",
        "numImages": 19
    },
    {
        "chapterNumber": "169",
        "numImages": 19
    },
    {
        "chapterNumber": "170",
        "numImages": 19
    },
    {
        "chapterNumber": "171",
        "numImages": 19
    },
    {
        "chapterNumber": "172",
        "numImages": 19
    },
    {
        "chapterNumber": "173",
        "numImages": 19
    },
    {
        "chapterNumber": "174",
        "numImages": 19
    },
    {
        "chapterNumber": "175",
        "numImages": 18
    },
    {
        "chapterNumber": "176",
        "numImages": 20
    },
    {
        "chapterNumber": "177",
        "numImages": 19
    },
    {
        "chapterNumber": "178",
        "numImages": 20
    },
    {
        "chapterNumber": "179",
        "numImages": 20
    },
    {
        "chapterNumber": "180",
        "numImages": 20
    },
    {
        "chapterNumber": "181",
        "numImages": 18
    },
    {
        "chapterNumber": "182",
        "numImages": 18
    },
    {
        "chapterNumber": "183",
        "numImages": 19
    },
    {
        "chapterNumber": "184",
        "numImages": 19
    },
    {
        "chapterNumber": "185",
        "numImages": 19
    },
    {
        "chapterNumber": "186",
        "numImages": 17
    },
    {
        "chapterNumber": "187",
        "numImages": 16
    },
    {
        "chapterNumber": "188",
        "numImages": 19
    },
    {
        "chapterNumber": "189",
        "numImages": 17
    },
    {
        "chapterNumber": "189a",
        "numImages": 17
    },
    {
        "chapterNumber": "190",
        "numImages": 19
    },
    {
        "chapterNumber": "191",
        "numImages": 19
    },
    {
        "chapterNumber": "192",
        "numImages": 19
    },
    {
        "chapterNumber": "193",
        "numImages": 18
    },
    {
        "chapterNumber": "194",
        "numImages": 18
    },
    {
        "chapterNumber": "195",
        "numImages": 20
    },
    {
        "chapterNumber": "196",
        "numImages": 18
    },
    {
        "chapterNumber": "197",
        "numImages": 19
    },
    {
        "chapterNumber": "198",
        "numImages": 19
    },
    {
        "chapterNumber": "199",
        "numImages": 16
    },
    {
        "chapterNumber": "200",
        "numImages": 18
    },
    {
        "chapterNumber": "201",
        "numImages": 18
    },
    {
        "chapterNumber": "202",
        "numImages": 19
    },
    {
        "chapterNumber": "203",
        "numImages": 19
    },
    {
        "chapterNumber": "204",
        "numImages": 19
    },
    {
        "chapterNumber": "205",
        "numImages": 19
    },
    {
        "chapterNumber": "206",
        "numImages": 19
    },
    {
        "chapterNumber": "207",
        "numImages": 19
    },
    {
        "chapterNumber": "208",
        "numImages": 18
    },
    {
        "chapterNumber": "209",
        "numImages": 20
    },
    {
        "chapterNumber": "210",
        "numImages": 17
    },
    {
        "chapterNumber": "211",
        "numImages": 19
    },
    {
        "chapterNumber": "212",
        "numImages": 19
    },
    {
        "chapterNumber": "213",
        "numImages": 22
    },
    {
        "chapterNumber": "214",
        "numImages": 19
    },
    {
        "chapterNumber": "215",
        "numImages": 19
    },
    {
        "chapterNumber": "216",
        "numImages": 17
    },
    {
        "chapterNumber": "217",
        "numImages": 19
    },
    {
        "chapterNumber": "218",
        "numImages": 18
    },
    {
        "chapterNumber": "219",
        "numImages": 19
    },
    {
        "chapterNumber": "220",
        "numImages": 19
    },
    {
        "chapterNumber": "221",
        "numImages": 17
    },
    {
        "chapterNumber": "222",
        "numImages": 19
    },
    {
        "chapterNumber": "223",
        "numImages": 19
    },
    {
        "chapterNumber": "224",
        "numImages": 18
    },
    {
        "chapterNumber": "225",
        "numImages": 18
    },
    {
        "chapterNumber": "226",
        "numImages": 18
    },
    {
        "chapterNumber": "227",
        "numImages": 19
    },
    {
        "chapterNumber": "228",
        "numImages": 19
    },
    {
        "chapterNumber": "229",
        "numImages": 19
    },
    {
        "chapterNumber": "230",
        "numImages": 19
    },
    {
        "chapterNumber": "231",
        "numImages": 19
    },
    {
        "chapterNumber": "232",
        "numImages": 18
    },
    {
        "chapterNumber": "233",
        "numImages": 16
    },
    {
        "chapterNumber": "234",
        "numImages": 17
    },
    {
        "chapterNumber": "235",
        "numImages": 18
    },
    {
        "chapterNumber": "236",
        "numImages": 18
    },
    {
        "chapterNumber": "237",
        "numImages": 30
    },
    {
        "chapterNumber": "238",
        "numImages": 17
    },
    {
        "chapterNumber": "239",
        "numImages": 16
    },
    {
        "chapterNumber": "240",
        "numImages": 17
    },
    {
        "chapterNumber": "241",
        "numImages": 17
    },
    {
        "chapterNumber": "242",
        "numImages": 17
    },
    {
        "chapterNumber": "243",
        "numImages": 17
    },
    {
        "chapterNumber": "244",
        "numImages": 19
    },
    {
        "chapterNumber": "245",
        "numImages": 17
    },
    {
        "chapterNumber": "246",
        "numImages": 28
    },
    {
        "chapterNumber": "247",
        "numImages": 19
    },
    {
        "chapterNumber": "248",
        "numImages": 19
    },
    {
        "chapterNumber": "249",
        "numImages": 21
    },
    {
        "chapterNumber": "250",
        "numImages": 18
    },
    {
        "chapterNumber": "251",
        "numImages": 18
    },
    {
        "chapterNumber": "252",
        "numImages": 19
    },
    {
        "chapterNumber": "253",
        "numImages": 16
    },
    {
        "chapterNumber": "254",
        "numImages": 18
    },
    {
        "chapterNumber": "255",
        "numImages": 19
    },
    {
        "chapterNumber": "256",
        "numImages": 29
    },
    {
        "chapterNumber": "257",
        "numImages": 18
    },
    {
        "chapterNumber": "258",
        "numImages": 20
    },
    {
        "chapterNumber": "259",
        "numImages": 18
    },
    {
        "chapterNumber": "260",
        "numImages": 14
    },
    {
        "chapterNumber": "261",
        "numImages": 19
    },
    {
        "chapterNumber": "262",
        "numImages": 19
    },
    {
        "chapterNumber": "263",
        "numImages": 20
    },
    {
        "chapterNumber": "264",
        "numImages": 20
    },
    {
        "chapterNumber": "265",
        "numImages": 25
    },
    {
        "chapterNumber": "266",
        "numImages": 19
    },
    {
        "chapterNumber": "267",
        "numImages": 17
    },
    {
        "chapterNumber": "268",
        "numImages": 17
    },
    {
        "chapterNumber": "269",
        "numImages": 21
    },
    {
        "chapterNumber": "270",
        "numImages": 20
    },
    {
        "chapterNumber": "271",
        "numImages": 18
    },
    {
        "chapterNumber": "272",
        "numImages": 19
    },
    {
        "chapterNumber": "273",
        "numImages": 18
    },
    {
        "chapterNumber": "274",
        "numImages": 22
    },
    {
        "chapterNumber": "275",
        "numImages": 19
    },
    {
        "chapterNumber": "276",
        "numImages": 19
    },
    {
        "chapterNumber": "277",
        "numImages": 17
    },
    {
        "chapterNumber": "278",
        "numImages": 20
    },
    {
        "chapterNumber": "279",
        "numImages": 18
    },
    {
        "chapterNumber": "280",
        "numImages": 19
    },
    {
        "chapterNumber": "281",
        "numImages": 18
    },
    {
        "chapterNumber": "282",
        "numImages": 18
    },
    {
        "chapterNumber": "283",
        "numImages": 19
    },
    {
        "chapterNumber": "284",
        "numImages": 18
    },
    {
        "chapterNumber": "285",
        "numImages": 18
    },
    {
        "chapterNumber": "286",
        "numImages": 17
    },
    {
        "chapterNumber": "287",
        "numImages": 18
    },
    {
        "chapterNumber": "288",
        "numImages": 19
    },
    {
        "chapterNumber": "289",
        "numImages": 21
    },
    {
        "chapterNumber": "290",
        "numImages": 18
    },
    {
        "chapterNumber": "291",
        "numImages": 18
    },
    {
        "chapterNumber": "292",
        "numImages": 104
    },
    {
        "chapterNumber": "293",
        "numImages": 17
    },
    {
        "chapterNumber": "294",
        "numImages": 18
    },
    {
        "chapterNumber": "295",
        "numImages": 17
    },
    {
        "chapterNumber": "296",
        "numImages": 18
    },
    {
        "chapterNumber": "297",
        "numImages": 16
    },
    {
        "chapterNumber": "298",
        "numImages": 14
    },
    {
        "chapterNumber": "299",
        "numImages": 16
    },
    {
        "chapterNumber": "300",
        "numImages": 17
    },
    {
        "chapterNumber": "301",
        "numImages": 19
    },
    {
        "chapterNumber": "302",
        "numImages": 18
    },
    {
        "chapterNumber": "303",
        "numImages": 19
    },
    {
        "chapterNumber": "304",
        "numImages": 3
    },
    {
        "chapterNumber": "305",
        "numImages": 19
    },
    {
        "chapterNumber": "305a",
        "numImages": 18
    },
    {
        "chapterNumber": "306",
        "numImages": 19
    },
    {
        "chapterNumber": "307",
        "numImages": 19
    },
    {
        "chapterNumber": "308",
        "numImages": 19
    },
    {
        "chapterNumber": "309",
        "numImages": 17
    },
    {
        "chapterNumber": "310",
        "numImages": 18
    },
    {
        "chapterNumber": "311",
        "numImages": 20
    },
    {
        "chapterNumber": "312",
        "numImages": 18
    },
    {
        "chapterNumber": "313",
        "numImages": 19
    },
    {
        "chapterNumber": "314",
        "numImages": 19
    },
    {
        "chapterNumber": "315",
        "numImages": 19
    },
    {
        "chapterNumber": "316",
        "numImages": 19
    },
    {
        "chapterNumber": "317",
        "numImages": 19
    },
    {
        "chapterNumber": "318",
        "numImages": 19
    },
    {
        "chapterNumber": "319",
        "numImages": 18
    },
    {
        "chapterNumber": "320",
        "numImages": 19
    },
    {
        "chapterNumber": "321",
        "numImages": 18
    },
    {
        "chapterNumber": "322",
        "numImages": 18
    },
    {
        "chapterNumber": "323",
        "numImages": 17
    },
    {
        "chapterNumber": "324",
        "numImages": 18
    },
    {
        "chapterNumber": "325",
        "numImages": 19
    },
    {
        "chapterNumber": "326",
        "numImages": 17
    },
    {
        "chapterNumber": "327",
        "numImages": 19
    },
    {
        "chapterNumber": "328",
        "numImages": 19
    },
    {
        "chapterNumber": "329",
        "numImages": 18
    },
    {
        "chapterNumber": "330",
        "numImages": 17
    },
    {
        "chapterNumber": "331",
        "numImages": 19
    },
    {
        "chapterNumber": "332",
        "numImages": 18
    },
    {
        "chapterNumber": "333",
        "numImages": 20
    },
    {
        "chapterNumber": "334",
        "numImages": 19
    },
    {
        "chapterNumber": "335",
        "numImages": 18
    },
    {
        "chapterNumber": "336",
        "numImages": 18
    },
    {
        "chapterNumber": "337",
        "numImages": 19
    },
    {
        "chapterNumber": "338",
        "numImages": 18
    },
    {
        "chapterNumber": "339",
        "numImages": 19
    },
    {
        "chapterNumber": "340",
        "numImages": 19
    },
    {
        "chapterNumber": "341",
        "numImages": 19
    },
    {
        "chapterNumber": "342",
        "numImages": 18
    },
    {
        "chapterNumber": "343",
        "numImages": 19
    },
    {
        "chapterNumber": "344",
        "numImages": 19
    },
    {
        "chapterNumber": "345",
        "numImages": 18
    },
    {
        "chapterNumber": "346",
        "numImages": 18
    },
    {
        "chapterNumber": "347",
        "numImages": 19
    },
    {
        "chapterNumber": "348",
        "numImages": 20
    },
    {
        "chapterNumber": "349",
        "numImages": 17
    },
    {
        "chapterNumber": "350",
        "numImages": 19
    },
    {
        "chapterNumber": "351",
        "numImages": 20
    },
    {
        "chapterNumber": "352",
        "numImages": 18
    },
    {
        "chapterNumber": "353",
        "numImages": 20
    },
    {
        "chapterNumber": "354",
        "numImages": 19
    },
    {
        "chapterNumber": "355",
        "numImages": 19
    },
    {
        "chapterNumber": "356",
        "numImages": 20
    },
    {
        "chapterNumber": "357",
        "numImages": 21
    },
    {
        "chapterNumber": "358",
        "numImages": 20
    },
    {
        "chapterNumber": "359",
        "numImages": 20
    },
    {
        "chapterNumber": "360",
        "numImages": 19
    },
    {
        "chapterNumber": "361",
        "numImages": 20
    },
    {
        "chapterNumber": "362",
        "numImages": 19
    },
    {
        "chapterNumber": "363",
        "numImages": 17
    },
    {
        "chapterNumber": "364",
        "numImages": 18
    },
    {
        "chapterNumber": "365",
        "numImages": 18
    },
    {
        "chapterNumber": "366",
        "numImages": 18
    },
    {
        "chapterNumber": "367",
        "numImages": 19
    },
    {
        "chapterNumber": "368",
        "numImages": 20
    },
    {
        "chapterNumber": "369",
        "numImages": 19
    },
    {
        "chapterNumber": "370",
        "numImages": 19
    },
    {
        "chapterNumber": "371",
        "numImages": 17
    },
    {
        "chapterNumber": "372",
        "numImages": 18
    },
    {
        "chapterNumber": "373",
        "numImages": 17
    },
    {
        "chapterNumber": "374",
        "numImages": 19
    },
    {
        "chapterNumber": "375",
        "numImages": 17
    },
    {
        "chapterNumber": "376",
        "numImages": 18
    },
    {
        "chapterNumber": "377",
        "numImages": 16
    },
    {
        "chapterNumber": "378",
        "numImages": 21
    },
    {
        "chapterNumber": "379",
        "numImages": 18
    },
    {
        "chapterNumber": "380",
        "numImages": 18
    },
    {
        "chapterNumber": "381",
        "numImages": 19
    },
    {
        "chapterNumber": "382",
        "numImages": 46
    },
    {
        "chapterNumber": "383",
        "numImages": 20
    },
    {
        "chapterNumber": "384",
        "numImages": 19
    },
    {
        "chapterNumber": "385",
        "numImages": 19
    },
    {
        "chapterNumber": "386",
        "numImages": 15
    },
    {
        "chapterNumber": "387",
        "numImages": 17
    },
    {
        "chapterNumber": "388",
        "numImages": 26
    },
    {
        "chapterNumber": "389",
        "numImages": 18
    },
    {
        "chapterNumber": "390",
        "numImages": 18
    },
    {
        "chapterNumber": "391",
        "numImages": 20
    },
    {
        "chapterNumber": "392",
        "numImages": 20
    },
    {
        "chapterNumber": "393",
        "numImages": 19
    },
    {
        "chapterNumber": "394",
        "numImages": 20
    },
    {
        "chapterNumber": "395",
        "numImages": 19
    },
    {
        "chapterNumber": "396",
        "numImages": 19
    },
    {
        "chapterNumber": "397",
        "numImages": 20
    },
    {
        "chapterNumber": "398",
        "numImages": 18
    },
    {
        "chapterNumber": "399",
        "numImages": 17
    },
    {
        "chapterNumber": "400",
        "numImages": 29
    },
    {
        "chapterNumber": "401",
        "numImages": 18
    },
    {
        "chapterNumber": "402",
        "numImages": 19
    },
    {
        "chapterNumber": "403",
        "numImages": 20
    },
    {
        "chapterNumber": "404",
        "numImages": 18
    },
    {
        "chapterNumber": "405",
        "numImages": 20
    },
    {
        "chapterNumber": "406",
        "numImages": 19
    },
    {
        "chapterNumber": "407",
        "numImages": 19
    },
    {
        "chapterNumber": "408",
        "numImages": 19
    },
    {
        "chapterNumber": "409",
        "numImages": 18
    },
    {
        "chapterNumber": "410",
        "numImages": 19
    },
    {
        "chapterNumber": "411",
        "numImages": 18
    },
    {
        "chapterNumber": "412",
        "numImages": 19
    },
    {
        "chapterNumber": "412a",
        "numImages": 19
    },
    {
        "chapterNumber": "413",
        "numImages": 20
    },
    {
        "chapterNumber": "413a",
        "numImages": 19
    },
    {
        "chapterNumber": "414",
        "numImages": 19
    },
    {
        "chapterNumber": "414a",
        "numImages": 18
    },
    {
        "chapterNumber": "415",
        "numImages": 19
    },
    {
        "chapterNumber": "415a",
        "numImages": 19
    },
    {
        "chapterNumber": "416",
        "numImages": 20
    },
    {
        "chapterNumber": "417",
        "numImages": 19
    },
    {
        "chapterNumber": "418",
        "numImages": 20
    },
    {
        "chapterNumber": "419",
        "numImages": 22
    },
    {
        "chapterNumber": "420",
        "numImages": 46
    },
    {
        "chapterNumber": "421",
        "numImages": 17
    },
    {
        "chapterNumber": "422",
        "numImages": 19
    },
    {
        "chapterNumber": "423",
        "numImages": 19
    },
    {
        "chapterNumber": "424",
        "numImages": 19
    },
    {
        "chapterNumber": "425",
        "numImages": 17
    },
    {
        "chapterNumber": "426",
        "numImages": 19
    },
    {
        "chapterNumber": "427",
        "numImages": 19
    },
    {
        "chapterNumber": "428",
        "numImages": 19
    },
    {
        "chapterNumber": "429",
        "numImages": 17
    },
    {
        "chapterNumber": "430",
        "numImages": 39
    },
    {
        "chapterNumber": "431",
        "numImages": 20
    },
    {
        "chapterNumber": "432",
        "numImages": 20
    },
    {
        "chapterNumber": "433",
        "numImages": 19
    },
    {
        "chapterNumber": "434",
        "numImages": 18
    },
    {
        "chapterNumber": "435",
        "numImages": 20
    },
    {
        "chapterNumber": "436",
        "numImages": 20
    },
    {
        "chapterNumber": "437",
        "numImages": 20
    },
    {
        "chapterNumber": "438",
        "numImages": 19
    },
    {
        "chapterNumber": "439",
        "numImages": 18
    },
    {
        "chapterNumber": "440",
        "numImages": 22
    },
    {
        "chapterNumber": "441",
        "numImages": 47
    },
    {
        "chapterNumber": "442",
        "numImages": 19
    },
    {
        "chapterNumber": "443",
        "numImages": 19
    },
    {
        "chapterNumber": "444",
        "numImages": 20
    },
    {
        "chapterNumber": "445",
        "numImages": 18
    },
    {
        "chapterNumber": "446",
        "numImages": 19
    },
    {
        "chapterNumber": "447",
        "numImages": 20
    },
    {
        "chapterNumber": "448",
        "numImages": 19
    },
    {
        "chapterNumber": "449",
        "numImages": 18
    },
    {
        "chapterNumber": "450",
        "numImages": 48
    },
    {
        "chapterNumber": "451",
        "numImages": 19
    },
    {
        "chapterNumber": "452",
        "numImages": 18
    },
    {
        "chapterNumber": "453",
        "numImages": 19
    },
    {
        "chapterNumber": "454",
        "numImages": 18
    },
    {
        "chapterNumber": "455",
        "numImages": 19
    },
    {
        "chapterNumber": "456",
        "numImages": 19
    },
    {
        "chapterNumber": "457",
        "numImages": 20
    },
    {
        "chapterNumber": "458",
        "numImages": 19
    },
    {
        "chapterNumber": "459",
        "numImages": 19
    },
    {
        "chapterNumber": "460",
        "numImages": 54
    },
    {
        "chapterNumber": "460a",
        "numImages": 28
    },
    {
        "chapterNumber": "461",
        "numImages": 20
    },
    {
        "chapterNumber": "462",
        "numImages": 19
    },
    {
        "chapterNumber": "463",
        "numImages": 19
    },
    {
        "chapterNumber": "464",
        "numImages": 19
    },
    {
        "chapterNumber": "465",
        "numImages": 20
    },
    {
        "chapterNumber": "466",
        "numImages": 20
    },
    {
        "chapterNumber": "467",
        "numImages": 19
    },
    {
        "chapterNumber": "468",
        "numImages": 20
    },
    {
        "chapterNumber": "469",
        "numImages": 17
    },
    {
        "chapterNumber": "470",
        "numImages": 16
    },
    {
        "chapterNumber": "471",
        "numImages": 16
    },
    {
        "chapterNumber": "472",
        "numImages": 18
    },
    {
        "chapterNumber": "473",
        "numImages": 19
    },
    {
        "chapterNumber": "474",
        "numImages": 18
    },
    {
        "chapterNumber": "475",
        "numImages": 19
    },
    {
        "chapterNumber": "476",
        "numImages": 20
    },
    {
        "chapterNumber": "477",
        "numImages": 19
    },
    {
        "chapterNumber": "478",
        "numImages": 17
    },
    {
        "chapterNumber": "479",
        "numImages": 16
    },
    {
        "chapterNumber": "480",
        "numImages": 18
    },
    {
        "chapterNumber": "481",
        "numImages": 19
    },
    {
        "chapterNumber": "482",
        "numImages": 17
    },
    {
        "chapterNumber": "483",
        "numImages": 19
    },
    {
        "chapterNumber": "484",
        "numImages": 21
    },
    {
        "chapterNumber": "485",
        "numImages": 20
    },
    {
        "chapterNumber": "486",
        "numImages": 20
    },
    {
        "chapterNumber": "487",
        "numImages": 20
    },
    {
        "chapterNumber": "488",
        "numImages": 20
    },
    {
        "chapterNumber": "489",
        "numImages": 17
    },
    {
        "chapterNumber": "490",
        "numImages": 19
    },
    {
        "chapterNumber": "491",
        "numImages": 19
    },
    {
        "chapterNumber": "492",
        "numImages": 20
    },
    {
        "chapterNumber": "493",
        "numImages": 20
    },
    {
        "chapterNumber": "494",
        "numImages": 19
    },
    {
        "chapterNumber": "495",
        "numImages": 20
    },
    {
        "chapterNumber": "496",
        "numImages": 18
    },
    {
        "chapterNumber": "497",
        "numImages": 20
    },
    {
        "chapterNumber": "498",
        "numImages": 20
    },
    {
        "chapterNumber": "499",
        "numImages": 19
    },
    {
        "chapterNumber": "500",
        "numImages": 20
    },
    {
        "chapterNumber": "501",
        "numImages": 20
    },
    {
        "chapterNumber": "502",
        "numImages": 22
    },
    {
        "chapterNumber": "503",
        "numImages": 19
    },
    {
        "chapterNumber": "504",
        "numImages": 20
    },
    {
        "chapterNumber": "505",
        "numImages": 19
    },
    {
        "chapterNumber": "506",
        "numImages": 19
    },
    {
        "chapterNumber": "507",
        "numImages": 20
    },
    {
        "chapterNumber": "508",
        "numImages": 20
    },
    {
        "chapterNumber": "509",
        "numImages": 20
    },
    {
        "chapterNumber": "510",
        "numImages": 19
    },
    {
        "chapterNumber": "511",
        "numImages": 18
    },
    {
        "chapterNumber": "512",
        "numImages": 18
    },
    {
        "chapterNumber": "513",
        "numImages": 27
    },
    {
        "chapterNumber": "514",
        "numImages": 19
    },
    {
        "chapterNumber": "515",
        "numImages": 18
    },
    {
        "chapterNumber": "516",
        "numImages": 19
    },
    {
        "chapterNumber": "517",
        "numImages": 20
    },
    {
        "chapterNumber": "518",
        "numImages": 20
    },
    {
        "chapterNumber": "519",
        "numImages": 19
    },
    {
        "chapterNumber": "520",
        "numImages": 19
    },
    {
        "chapterNumber": "521",
        "numImages": 20
    },
    {
        "chapterNumber": "522",
        "numImages": 21
    },
    {
        "chapterNumber": "523",
        "numImages": 26
    },
    {
        "chapterNumber": "524",
        "numImages": 19
    },
    {
        "chapterNumber": "525",
        "numImages": 14
    },
    {
        "chapterNumber": "526",
        "numImages": 22
    },
    {
        "chapterNumber": "527",
        "numImages": 20
    },
    {
        "chapterNumber": "528",
        "numImages": 19
    },
    {
        "chapterNumber": "529",
        "numImages": 17
    },
    {
        "chapterNumber": "530",
        "numImages": 20
    },
    {
        "chapterNumber": "531",
        "numImages": 17
    },
    {
        "chapterNumber": "532",
        "numImages": 20
    },
    {
        "chapterNumber": "533",
        "numImages": 23
    },
    {
        "chapterNumber": "534",
        "numImages": 18
    },
    {
        "chapterNumber": "535",
        "numImages": 20
    },
    {
        "chapterNumber": "536",
        "numImages": 19
    },
    {
        "chapterNumber": "537",
        "numImages": 18
    },
    {
        "chapterNumber": "538",
        "numImages": 20
    },
    {
        "chapterNumber": "539",
        "numImages": 18
    },
    {
        "chapterNumber": "540",
        "numImages": 19
    },
    {
        "chapterNumber": "541",
        "numImages": 22
    },
    {
        "chapterNumber": "542",
        "numImages": 23
    },
    {
        "chapterNumber": "543",
        "numImages": 15
    },
    {
        "chapterNumber": "544",
        "numImages": 20
    },
    {
        "chapterNumber": "545",
        "numImages": 18
    },
    {
        "chapterNumber": "546",
        "numImages": 16
    },
    {
        "chapterNumber": "547",
        "numImages": 16
    },
    {
        "chapterNumber": "548",
        "numImages": 19
    },
    {
        "chapterNumber": "549",
        "numImages": 20
    },
    {
        "chapterNumber": "550",
        "numImages": 16
    },
    {
        "chapterNumber": "551",
        "numImages": 16
    },
    {
        "chapterNumber": "552",
        "numImages": 22
    },
    {
        "chapterNumber": "553",
        "numImages": 11
    },
    {
        "chapterNumber": "554",
        "numImages": 9
    },
    {
        "chapterNumber": "555",
        "numImages": 12
    },
    {
        "chapterNumber": "556",
        "numImages": 13
    },
    {
        "chapterNumber": "557",
        "numImages": 15
    },
    {
        "chapterNumber": "558",
        "numImages": 14
    },
    {
        "chapterNumber": "559",
        "numImages": 16
    },
    {
        "chapterNumber": "560",
        "numImages": 14
    },
    {
        "chapterNumber": "561",
        "numImages": 16
    },
    {
        "chapterNumber": "562",
        "numImages": 17
    },
    {
        "chapterNumber": "563",
        "numImages": 20
    },
    {
        "chapterNumber": "564",
        "numImages": 14
    },
    {
        "chapterNumber": "565",
        "numImages": 15
    },
    {
        "chapterNumber": "566",
        "numImages": 14
    },
    {
        "chapterNumber": "567",
        "numImages": 18
    },
    {
        "chapterNumber": "568",
        "numImages": 14
    },
    {
        "chapterNumber": "569",
        "numImages": 1
    },
    {
        "chapterNumber": "570",
        "numImages": 14
    },
    {
        "chapterNumber": "571",
        "numImages": 14
    },
    {
        "chapterNumber": "572",
        "numImages": 13
    },
    {
        "chapterNumber": "573",
        "numImages": 16
    },
    {
        "chapterNumber": "574",
        "numImages": 21
    },
    {
        "chapterNumber": "575",
        "numImages": 11
    },
    {
        "chapterNumber": "576",
        "numImages": 14
    },
    {
        "chapterNumber": "577",
        "numImages": 14
    },
    {
        "chapterNumber": "578",
        "numImages": 30
    },
    {
        "chapterNumber": "579",
        "numImages": 15
    },
    {
        "chapterNumber": "580",
        "numImages": 13
    },
    {
        "chapterNumber": "581",
        "numImages": 17
    },
    {
        "chapterNumber": "582",
        "numImages": 20
    },
    {
        "chapterNumber": "583",
        "numImages": 17
    },
    {
        "chapterNumber": "584",
        "numImages": 17
    },
    {
        "chapterNumber": "585",
        "numImages": 46
    },
    {
        "chapterNumber": "586",
        "numImages": 21
    },
    {
        "chapterNumber": "587",
        "numImages": 19
    },
    {
        "chapterNumber": "588",
        "numImages": 20
    },
    {
        "chapterNumber": "589",
        "numImages": 20
    },
    {
        "chapterNumber": "590",
        "numImages": 19
    },
    {
        "chapterNumber": "591",
        "numImages": 20
    },
    {
        "chapterNumber": "592",
        "numImages": 105
    },
    {
        "chapterNumber": "593",
        "numImages": 20
    },
    {
        "chapterNumber": "594",
        "numImages": 20
    },
    {
        "chapterNumber": "595",
        "numImages": 26
    },
    {
        "chapterNumber": "596",
        "numImages": 20
    },
    {
        "chapterNumber": "597",
        "numImages": 24
    },
    {
        "chapterNumber": "598",
        "numImages": 23
    },
    {
        "chapterNumber": "599",
        "numImages": 18
    },
    {
        "chapterNumber": "600",
        "numImages": 19
    },
    {
        "chapterNumber": "601",
        "numImages": 14
    },
    {
        "chapterNumber": "602",
        "numImages": 16
    },
    {
        "chapterNumber": "603",
        "numImages": 19
    },
    {
        "chapterNumber": "604",
        "numImages": 25
    },
    {
        "chapterNumber": "605",
        "numImages": 17
    },
    {
        "chapterNumber": "606",
        "numImages": 14
    },
    {
        "chapterNumber": "607",
        "numImages": 14
    },
    {
        "chapterNumber": "608",
        "numImages": 16
    },
    {
        "chapterNumber": "609",
        "numImages": 18
    },
    {
        "chapterNumber": "610",
        "numImages": 16
    },
    {
        "chapterNumber": "611",
        "numImages": 16
    },
    {
        "chapterNumber": "612",
        "numImages": 18
    },
    {
        "chapterNumber": "613",
        "numImages": 17
    },
    {
        "chapterNumber": "614",
        "numImages": 17
    },
    {
        "chapterNumber": "615",
        "numImages": 24
    },
    {
        "chapterNumber": "616",
        "numImages": 16
    },
    {
        "chapterNumber": "617",
        "numImages": 17
    },
    {
        "chapterNumber": "618",
        "numImages": 18
    },
    {
        "chapterNumber": "619",
        "numImages": 16
    },
    {
        "chapterNumber": "620",
        "numImages": 18
    },
    {
        "chapterNumber": "621",
        "numImages": 16
    },
    {
        "chapterNumber": "622",
        "numImages": 20
    },
    {
        "chapterNumber": "623",
        "numImages": 20
    },
    {
        "chapterNumber": "624",
        "numImages": 18
    },
    {
        "chapterNumber": "625",
        "numImages": 19
    },
    {
        "chapterNumber": "626",
        "numImages": 19
    },
    {
        "chapterNumber": "627",
        "numImages": 24
    },
    {
        "chapterNumber": "628",
        "numImages": 20
    },
    {
        "chapterNumber": "629",
        "numImages": 19
    },
    {
        "chapterNumber": "630",
        "numImages": 19
    },
    {
        "chapterNumber": "631",
        "numImages": 17
    },
    {
        "chapterNumber": "632",
        "numImages": 17
    },
    {
        "chapterNumber": "633",
        "numImages": 16
    },
    {
        "chapterNumber": "634",
        "numImages": 17
    },
    {
        "chapterNumber": "635",
        "numImages": 18
    },
    {
        "chapterNumber": "636",
        "numImages": 19
    },
    {
        "chapterNumber": "637",
        "numImages": 24
    },
    {
        "chapterNumber": "638",
        "numImages": 18
    },
    {
        "chapterNumber": "639",
        "numImages": 19
    },
    {
        "chapterNumber": "640",
        "numImages": 18
    },
    {
        "chapterNumber": "641",
        "numImages": 19
    },
    {
        "chapterNumber": "642",
        "numImages": 20
    },
    {
        "chapterNumber": "643",
        "numImages": 20
    },
    {
        "chapterNumber": "644",
        "numImages": 19
    },
    {
        "chapterNumber": "645",
        "numImages": 18
    },
    {
        "chapterNumber": "646",
        "numImages": 12
    },
    {
        "chapterNumber": "647",
        "numImages": 20
    },
    {
        "chapterNumber": "648",
        "numImages": 18
    },
    {
        "chapterNumber": "649",
        "numImages": 19
    },
    {
        "chapterNumber": "650",
        "numImages": 17
    },
    {
        "chapterNumber": "651",
        "numImages": 19
    },
    {
        "chapterNumber": "652",
        "numImages": 18
    },
    {
        "chapterNumber": "653",
        "numImages": 19
    },
    {
        "chapterNumber": "654",
        "numImages": 18
    },
    {
        "chapterNumber": "655",
        "numImages": 19
    },
    {
        "chapterNumber": "656",
        "numImages": 20
    },
    {
        "chapterNumber": "657",
        "numImages": 24
    },
    {
        "chapterNumber": "658",
        "numImages": 20
    },
    {
        "chapterNumber": "659",
        "numImages": 19
    },
    {
        "chapterNumber": "660",
        "numImages": 18
    },
    {
        "chapterNumber": "661",
        "numImages": 20
    },
    {
        "chapterNumber": "662",
        "numImages": 20
    },
    {
        "chapterNumber": "663",
        "numImages": 19
    },
    {
        "chapterNumber": "664",
        "numImages": 20
    },
    {
        "chapterNumber": "665",
        "numImages": 18
    },
    {
        "chapterNumber": "666",
        "numImages": 18
    },
    {
        "chapterNumber": "667",
        "numImages": 18
    },
    {
        "chapterNumber": "668",
        "numImages": 45
    },
    {
        "chapterNumber": "669",
        "numImages": 18
    },
    {
        "chapterNumber": "670",
        "numImages": 18
    },
    {
        "chapterNumber": "671",
        "numImages": 17
    },
    {
        "chapterNumber": "672",
        "numImages": 19
    },
    {
        "chapterNumber": "673",
        "numImages": 38
    },
    {
        "chapterNumber": "674",
        "numImages": 18
    },
    {
        "chapterNumber": "675",
        "numImages": 18
    },
    {
        "chapterNumber": "676",
        "numImages": 19
    },
    {
        "chapterNumber": "677",
        "numImages": 17
    },
    {
        "chapterNumber": "678",
        "numImages": 16
    },
    {
        "chapterNumber": "679",
        "numImages": 44
    },
    {
        "chapterNumber": "680",
        "numImages": 19
    },
    {
        "chapterNumber": "681",
        "numImages": 20
    },
    {
        "chapterNumber": "682",
        "numImages": 19
    },
    {
        "chapterNumber": "683",
        "numImages": 39
    },
    {
        "chapterNumber": "684",
        "numImages": 19
    },
    {
        "chapterNumber": "685",
        "numImages": 19
    },
    {
        "chapterNumber": "686",
        "numImages": 20
    },
    {
        "chapterNumber": "687",
        "numImages": 19
    },
    {
        "chapterNumber": "688",
        "numImages": 19
    },
    {
        "chapterNumber": "689",
        "numImages": 18
    },
    {
        "chapterNumber": "690",
        "numImages": 17
    },
    {
        "chapterNumber": "691",
        "numImages": 22
    },
    {
        "chapterNumber": "692",
        "numImages": 18
    },
    {
        "chapterNumber": "693",
        "numImages": 18
    },
    {
        "chapterNumber": "694",
        "numImages": 17
    },
    {
        "chapterNumber": "695",
        "numImages": 18
    },
    {
        "chapterNumber": "696",
        "numImages": 19
    },
    {
        "chapterNumber": "697",
        "numImages": 20
    },
    {
        "chapterNumber": "698",
        "numImages": 18
    },
    {
        "chapterNumber": "699",
        "numImages": 20
    },
    {
        "chapterNumber": "700",
        "numImages": 19
    },
    {
        "chapterNumber": "701",
        "numImages": 25
    },
    {
        "chapterNumber": "702",
        "numImages": 14
    },
    {
        "chapterNumber": "703",
        "numImages": 20
    },
    {
        "chapterNumber": "704",
        "numImages": 19
    },
    {
        "chapterNumber": "705",
        "numImages": 20
    },
    {
        "chapterNumber": "706",
        "numImages": 14
    },
    {
        "chapterNumber": "707",
        "numImages": 18
    },
    {
        "chapterNumber": "708",
        "numImages": 16
    },
    {
        "chapterNumber": "709",
        "numImages": 18
    },
    {
        "chapterNumber": "710",
        "numImages": 19
    },
    {
        "chapterNumber": "711",
        "numImages": 17
    },
    {
        "chapterNumber": "712",
        "numImages": 43
    },
    {
        "chapterNumber": "713",
        "numImages": 19
    },
    {
        "chapterNumber": "714",
        "numImages": 19
    },
    {
        "chapterNumber": "715",
        "numImages": 18
    },
    {
        "chapterNumber": "716",
        "numImages": 17
    },
    {
        "chapterNumber": "717",
        "numImages": 20
    },
    {
        "chapterNumber": "718",
        "numImages": 18
    },
    {
        "chapterNumber": "719",
        "numImages": 19
    },
    {
        "chapterNumber": "720",
        "numImages": 20
    },
    {
        "chapterNumber": "721",
        "numImages": 18
    },
    {
        "chapterNumber": "722",
        "numImages": 43
    },
    {
        "chapterNumber": "723",
        "numImages": 18
    },
    {
        "chapterNumber": "724",
        "numImages": 20
    },
    {
        "chapterNumber": "725",
        "numImages": 15
    },
    {
        "chapterNumber": "726",
        "numImages": 20
    },
    {
        "chapterNumber": "727",
        "numImages": 19
    },
    {
        "chapterNumber": "728",
        "numImages": 18
    },
    {
        "chapterNumber": "729",
        "numImages": 17
    },
    {
        "chapterNumber": "730",
        "numImages": 18
    },
    {
        "chapterNumber": "731",
        "numImages": 19
    },
    {
        "chapterNumber": "732",
        "numImages": 23
    },
    {
        "chapterNumber": "733",
        "numImages": 19
    },
    {
        "chapterNumber": "734",
        "numImages": 19
    },
    {
        "chapterNumber": "735",
        "numImages": 20
    },
    {
        "chapterNumber": "736",
        "numImages": 17
    },
    {
        "chapterNumber": "737",
        "numImages": 18
    },
    {
        "chapterNumber": "738",
        "numImages": 18
    },
    {
        "chapterNumber": "739",
        "numImages": 20
    },
    {
        "chapterNumber": "740",
        "numImages": 19
    },
    {
        "chapterNumber": "741",
        "numImages": 20
    },
    {
        "chapterNumber": "742",
        "numImages": 18
    },
    {
        "chapterNumber": "743",
        "numImages": 22
    },
    {
        "chapterNumber": "744",
        "numImages": 18
    },
    {
        "chapterNumber": "745",
        "numImages": 19
    },
    {
        "chapterNumber": "746",
        "numImages": 19
    },
    {
        "chapterNumber": "747",
        "numImages": 18
    },
    {
        "chapterNumber": "748",
        "numImages": 15
    },
    {
        "chapterNumber": "749",
        "numImages": 30
    },
    {
        "chapterNumber": "750",
        "numImages": 17
    },
    {
        "chapterNumber": "751",
        "numImages": 16
    },
    {
        "chapterNumber": "752",
        "numImages": 16
    },
    {
        "chapterNumber": "753",
        "numImages": 22
    },
    {
        "chapterNumber": "754",
        "numImages": 16
    },
    {
        "chapterNumber": "755",
        "numImages": 17
    },
    {
        "chapterNumber": "756",
        "numImages": 19
    },
    {
        "chapterNumber": "757",
        "numImages": 16
    },
    {
        "chapterNumber": "758",
        "numImages": 17
    },
    {
        "chapterNumber": "759",
        "numImages": 16
    },
    {
        "chapterNumber": "760",
        "numImages": 13
    },
    {
        "chapterNumber": "761",
        "numImages": 16
    },
    {
        "chapterNumber": "762",
        "numImages": 17
    },
    {
        "chapterNumber": "763",
        "numImages": 21
    },
    {
        "chapterNumber": "764",
        "numImages": 27
    },
    {
        "chapterNumber": "765",
        "numImages": 18
    },
    {
        "chapterNumber": "766",
        "numImages": 17
    },
    {
        "chapterNumber": "767",
        "numImages": 18
    },
    {
        "chapterNumber": "768",
        "numImages": 13
    },
    {
        "chapterNumber": "769",
        "numImages": 17
    },
    {
        "chapterNumber": "770",
        "numImages": 13
    },
    {
        "chapterNumber": "771",
        "numImages": 19
    },
    {
        "chapterNumber": "772",
        "numImages": 16
    },
    {
        "chapterNumber": "773",
        "numImages": 18
    },
    {
        "chapterNumber": "774",
        "numImages": 13
    },
    {
        "chapterNumber": "775",
        "numImages": 18
    },
    {
        "chapterNumber": "776",
        "numImages": 24
    },
    {
        "chapterNumber": "777",
        "numImages": 19
    },
    {
        "chapterNumber": "778",
        "numImages": 14
    },
    {
        "chapterNumber": "779",
        "numImages": 53
    },
    {
        "chapterNumber": "780",
        "numImages": 34
    },
    {
        "chapterNumber": "781",
        "numImages": 19
    },
    {
        "chapterNumber": "782",
        "numImages": 18
    },
    {
        "chapterNumber": "783",
        "numImages": 18
    },
    {
        "chapterNumber": "784",
        "numImages": 17
    },
    {
        "chapterNumber": "785",
        "numImages": 17
    },
    {
        "chapterNumber": "786",
        "numImages": 21
    },
    {
        "chapterNumber": "787",
        "numImages": 15
    },
    {
        "chapterNumber": "788",
        "numImages": 17
    },
    {
        "chapterNumber": "789",
        "numImages": 18
    },
    {
        "chapterNumber": "790",
        "numImages": 18
    },
    {
        "chapterNumber": "791",
        "numImages": 16
    },
    {
        "chapterNumber": "792",
        "numImages": 15
    },
    {
        "chapterNumber": "793",
        "numImages": 15
    },
    {
        "chapterNumber": "794",
        "numImages": 16
    },
    {
        "chapterNumber": "795",
        "numImages": 20
    },
    {
        "chapterNumber": "796",
        "numImages": 25
    },
    {
        "chapterNumber": "797",
        "numImages": 1
    },
    {
        "chapterNumber": "798",
        "numImages": 16
    },
    {
        "chapterNumber": "799",
        "numImages": 15
    },
    {
        "chapterNumber": "800",
        "numImages": 14
    },
    {
        "chapterNumber": "801",
        "numImages": 16
    },
    {
        "chapterNumber": "802",
        "numImages": 16
    },
    {
        "chapterNumber": "803",
        "numImages": 14
    },
    {
        "chapterNumber": "804",
        "numImages": 17
    },
    {
        "chapterNumber": "805",
        "numImages": 17
    },
    {
        "chapterNumber": "806",
        "numImages": 16
    },
    {
        "chapterNumber": "807",
        "numImages": 23
    },
    {
        "chapterNumber": "808",
        "numImages": 16
    },
    {
        "chapterNumber": "809",
        "numImages": 17
    },
    {
        "chapterNumber": "810",
        "numImages": 16
    },
    {
        "chapterNumber": "811",
        "numImages": 20
    },
    {
        "chapterNumber": "812",
        "numImages": 18
    },
    {
        "chapterNumber": "813",
        "numImages": 18
    },
    {
        "chapterNumber": "814",
        "numImages": 17
    },
    {
        "chapterNumber": "815",
        "numImages": 18
    },
    {
        "chapterNumber": "816",
        "numImages": 19
    },
    {
        "chapterNumber": "817",
        "numImages": 27
    },
    {
        "chapterNumber": "818",
        "numImages": 16
    },
    {
        "chapterNumber": "819",
        "numImages": 18
    },
    {
        "chapterNumber": "820",
        "numImages": 17
    },
    {
        "chapterNumber": "821",
        "numImages": 19
    },
    {
        "chapterNumber": "822",
        "numImages": 18
    },
    {
        "chapterNumber": "823",
        "numImages": 18
    },
    {
        "chapterNumber": "824",
        "numImages": 20
    },
    {
        "chapterNumber": "825",
        "numImages": 14
    },
    {
        "chapterNumber": "826",
        "numImages": 37
    },
    {
        "chapterNumber": "827",
        "numImages": 19
    },
    {
        "chapterNumber": "828",
        "numImages": 23
    },
    {
        "chapterNumber": "829",
        "numImages": 16
    },
    {
        "chapterNumber": "830",
        "numImages": 17
    },
    {
        "chapterNumber": "831",
        "numImages": 17
    },
    {
        "chapterNumber": "832",
        "numImages": 18
    },
    {
        "chapterNumber": "833",
        "numImages": 20
    },
    {
        "chapterNumber": "834",
        "numImages": 17
    },
    {
        "chapterNumber": "835",
        "numImages": 19
    },
    {
        "chapterNumber": "836",
        "numImages": 15
    },
    {
        "chapterNumber": "837",
        "numImages": 16
    },
    {
        "chapterNumber": "838",
        "numImages": 14
    },
    {
        "chapterNumber": "839",
        "numImages": 41
    },
    {
        "chapterNumber": "840",
        "numImages": 18
    },
    {
        "chapterNumber": "841",
        "numImages": 17
    },
    {
        "chapterNumber": "842",
        "numImages": 13
    },
    {
        "chapterNumber": "843",
        "numImages": 19
    },
    {
        "chapterNumber": "844",
        "numImages": 17
    },
    {
        "chapterNumber": "845",
        "numImages": 16
    },
    {
        "chapterNumber": "846",
        "numImages": 17
    },
    {
        "chapterNumber": "847",
        "numImages": 17
    },
    {
        "chapterNumber": "848",
        "numImages": 17
    },
    {
        "chapterNumber": "849",
        "numImages": 41
    },
    {
        "chapterNumber": "850",
        "numImages": 17
    },
    {
        "chapterNumber": "851",
        "numImages": 16
    },
    {
        "chapterNumber": "852",
        "numImages": 18
    },
    {
        "chapterNumber": "853",
        "numImages": 15
    },
    {
        "chapterNumber": "854",
        "numImages": 18
    },
    {
        "chapterNumber": "855",
        "numImages": 17
    },
    {
        "chapterNumber": "856",
        "numImages": 18
    },
    {
        "chapterNumber": "857",
        "numImages": 16
    },
    {
        "chapterNumber": "858",
        "numImages": 17
    },
    {
        "chapterNumber": "859",
        "numImages": 23
    },
    {
        "chapterNumber": "860",
        "numImages": 13
    },
    {
        "chapterNumber": "861",
        "numImages": 16
    },
    {
        "chapterNumber": "862",
        "numImages": 15
    },
    {
        "chapterNumber": "863",
        "numImages": 19
    },
    {
        "chapterNumber": "864",
        "numImages": 17
    },
    {
        "chapterNumber": "865",
        "numImages": 17
    },
    {
        "chapterNumber": "866",
        "numImages": 15
    },
    {
        "chapterNumber": "867",
        "numImages": 15
    },
    {
        "chapterNumber": "868",
        "numImages": 13
    },
    {
        "chapterNumber": "869",
        "numImages": 16
    },
    {
        "chapterNumber": "870",
        "numImages": 23
    },
    {
        "chapterNumber": "871",
        "numImages": 16
    },
    {
        "chapterNumber": "872",
        "numImages": 18
    },
    {
        "chapterNumber": "873",
        "numImages": 15
    },
    {
        "chapterNumber": "874",
        "numImages": 19
    },
    {
        "chapterNumber": "875",
        "numImages": 17
    },
    {
        "chapterNumber": "876",
        "numImages": 16
    },
    {
        "chapterNumber": "877",
        "numImages": 15
    },
    {
        "chapterNumber": "878",
        "numImages": 18
    },
    {
        "chapterNumber": "879",
        "numImages": 20
    },
    {
        "chapterNumber": "880",
        "numImages": 23
    },
    {
        "chapterNumber": "881",
        "numImages": 17
    },
    {
        "chapterNumber": "882",
        "numImages": 16
    },
    {
        "chapterNumber": "883",
        "numImages": 17
    },
    {
        "chapterNumber": "884",
        "numImages": 18
    },
    {
        "chapterNumber": "885",
        "numImages": 15
    },
    {
        "chapterNumber": "886",
        "numImages": 20
    },
    {
        "chapterNumber": "887",
        "numImages": 16
    },
    {
        "chapterNumber": "888",
        "numImages": 15
    },
    {
        "chapterNumber": "889",
        "numImages": 16
    },
    {
        "chapterNumber": "890",
        "numImages": 26
    },
    {
        "chapterNumber": "891",
        "numImages": 16
    },
    {
        "chapterNumber": "892",
        "numImages": 15
    },
    {
        "chapterNumber": "893",
        "numImages": 18
    },
    {
        "chapterNumber": "894",
        "numImages": 17
    },
    {
        "chapterNumber": "895",
        "numImages": 16
    },
    {
        "chapterNumber": "896",
        "numImages": 15
    },
    {
        "chapterNumber": "897",
        "numImages": 15
    },
    {
        "chapterNumber": "898",
        "numImages": 31
    },
    {
        "chapterNumber": "899",
        "numImages": 17
    },
    {
        "chapterNumber": "900",
        "numImages": 17
    },
    {
        "chapterNumber": "901",
        "numImages": 21
    },
    {
        "chapterNumber": "902",
        "numImages": 19
    },
    {
        "chapterNumber": "903",
        "numImages": 17
    },
    {
        "chapterNumber": "904",
        "numImages": 20
    },
    {
        "chapterNumber": "905",
        "numImages": 15
    },
    {
        "chapterNumber": "906",
        "numImages": 17
    },
    {
        "chapterNumber": "907",
        "numImages": 17
    },
    {
        "chapterNumber": "908",
        "numImages": 16
    },
    {
        "chapterNumber": "909",
        "numImages": 7
    },
    {
        "chapterNumber": "910",
        "numImages": 15
    },
    {
        "chapterNumber": "911",
        "numImages": 25
    },
    {
        "chapterNumber": "912",
        "numImages": 20
    },
    {
        "chapterNumber": "913",
        "numImages": 15
    },
    {
        "chapterNumber": "914",
        "numImages": 18
    },
    {
        "chapterNumber": "915",
        "numImages": 15
    },
    {
        "chapterNumber": "916",
        "numImages": 19
    },
    {
        "chapterNumber": "917",
        "numImages": 17
    },
    {
        "chapterNumber": "918",
        "numImages": 17
    },
    {
        "chapterNumber": "919",
        "numImages": 17
    },
    {
        "chapterNumber": "920",
        "numImages": 16
    },
    {
        "chapterNumber": "921",
        "numImages": 17
    },
    {
        "chapterNumber": "922",
        "numImages": 21
    },
    {
        "chapterNumber": "923",
        "numImages": 14
    },
    {
        "chapterNumber": "924",
        "numImages": 16
    },
    {
        "chapterNumber": "925",
        "numImages": 16
    },
    {
        "chapterNumber": "926",
        "numImages": 18
    },
    {
        "chapterNumber": "927",
        "numImages": 16
    },
    {
        "chapterNumber": "928",
        "numImages": 16
    },
    {
        "chapterNumber": "929",
        "numImages": 15
    },
    {
        "chapterNumber": "930",
        "numImages": 16
    },
    {
        "chapterNumber": "931",
        "numImages": 16
    },
    {
        "chapterNumber": "932",
        "numImages": 41
    },
    {
        "chapterNumber": "933",
        "numImages": 22
    },
    {
        "chapterNumber": "934",
        "numImages": 16
    },
    {
        "chapterNumber": "935",
        "numImages": 17
    },
    {
        "chapterNumber": "936",
        "numImages": 17
    },
    {
        "chapterNumber": "937",
        "numImages": 17
    },
    {
        "chapterNumber": "938",
        "numImages": 14
    },
    {
        "chapterNumber": "939",
        "numImages": 17
    },
    {
        "chapterNumber": "940",
        "numImages": 17
    },
    {
        "chapterNumber": "941",
        "numImages": 18
    },
    {
        "chapterNumber": "942",
        "numImages": 17
    },
    {
        "chapterNumber": "943",
        "numImages": 39
    },
    {
        "chapterNumber": "944",
        "numImages": 15
    },
    {
        "chapterNumber": "945",
        "numImages": 17
    },
    {
        "chapterNumber": "946",
        "numImages": 16
    },
    {
        "chapterNumber": "947",
        "numImages": 17
    },
    {
        "chapterNumber": "948",
        "numImages": 14
    },
    {
        "chapterNumber": "949",
        "numImages": 18
    },
    {
        "chapterNumber": "950",
        "numImages": 14
    },
    {
        "chapterNumber": "951",
        "numImages": 18
    },
    {
        "chapterNumber": "952",
        "numImages": 18
    },
    {
        "chapterNumber": "953",
        "numImages": 18
    },
    {
        "chapterNumber": "954",
        "numImages": 19
    },
    {
        "chapterNumber": "955",
        "numImages": 16
    },
    {
        "chapterNumber": "956",
        "numImages": 17
    },
    {
        "chapterNumber": "957",
        "numImages": 20
    },
    {
        "chapterNumber": "958",
        "numImages": 14
    },
    {
        "chapterNumber": "959",
        "numImages": 18
    },
    {
        "chapterNumber": "960",
        "numImages": 16
    },
    {
        "chapterNumber": "961",
        "numImages": 16
    },
    {
        "chapterNumber": "962",
        "numImages": 14
    },
    {
        "chapterNumber": "963",
        "numImages": 15
    },
    {
        "chapterNumber": "964",
        "numImages": 20
    },
    {
        "chapterNumber": "965",
        "numImages": 22
    },
    {
        "chapterNumber": "966",
        "numImages": 16
    },
    {
        "chapterNumber": "967",
        "numImages": 19
    },
    {
        "chapterNumber": "968",
        "numImages": 17
    },
    {
        "chapterNumber": "969",
        "numImages": 15
    },
    {
        "chapterNumber": "970",
        "numImages": 16
    },
    {
        "chapterNumber": "971",
        "numImages": 15
    },
    {
        "chapterNumber": "972",
        "numImages": 19
    },
    {
        "chapterNumber": "973",
        "numImages": 18
    },
    {
        "chapterNumber": "974",
        "numImages": 17
    },
    {
        "chapterNumber": "975",
        "numImages": 42
    },
    {
        "chapterNumber": "976",
        "numImages": 18
    },
    {
        "chapterNumber": "977",
        "numImages": 15
    },
    {
        "chapterNumber": "978",
        "numImages": 14
    },
    {
        "chapterNumber": "979",
        "numImages": 16
    },
    {
        "chapterNumber": "980",
        "numImages": 15
    },
    {
        "chapterNumber": "981",
        "numImages": 18
    },
    {
        "chapterNumber": "982",
        "numImages": 17
    },
    {
        "chapterNumber": "983",
        "numImages": 17
    },
    {
        "chapterNumber": "984",
        "numImages": 16
    },
    {
        "chapterNumber": "985",
        "numImages": 39
    },
    {
        "chapterNumber": "986",
        "numImages": 15
    },
    {
        "chapterNumber": "987",
        "numImages": 15
    },
    {
        "chapterNumber": "988",
        "numImages": 13
    },
    {
        "chapterNumber": "989",
        "numImages": 15
    },
    {
        "chapterNumber": "990",
        "numImages": 17
    },
    {
        "chapterNumber": "991",
        "numImages": 15
    },
    {
        "chapterNumber": "992",
        "numImages": 15
    },
    {
        "chapterNumber": "993",
        "numImages": 16
    },
    {
        "chapterNumber": "994",
        "numImages": 18
    },
    {
        "chapterNumber": "995",
        "numImages": 23
    },
    {
        "chapterNumber": "996",
        "numImages": 18
    },
    {
        "chapterNumber": "997",
        "numImages": 17
    },
    {
        "chapterNumber": "998",
        "numImages": 12
    },
    {
        "chapterNumber": "999",
        "numImages": 20
    },
    {
        "chapterNumber": "1000",
        "numImages": 17
    },
    {
        "chapterNumber": "1001",
        "numImages": 15
    },
    {
        "chapterNumber": "1002",
        "numImages": 28
    },
    {
        "chapterNumber": "1003",
        "numImages": 28
    },
    {
        "chapterNumber": "1004",
        "numImages": 21
    },
    {
        "chapterNumber": "1005",
        "numImages": 21
    },
    {
        "chapterNumber": "1006",
        "numImages": 20
    },
    {
        "chapterNumber": "1007",
        "numImages": 17
    },
    {
        "chapterNumber": "1008",
        "numImages": 16
    },
    {
        "chapterNumber": "1009",
        "numImages": 18
    },
    {
        "chapterNumber": "1010",
        "numImages": 16
    },
    {
        "chapterNumber": "1011",
        "numImages": 19
    },
    {
        "chapterNumber": "1012",
        "numImages": 15
    },
    {
        "chapterNumber": "1013",
        "numImages": 15
    },
    {
        "chapterNumber": "1014",
        "numImages": 15
    },
    {
        "chapterNumber": "1015",
        "numImages": 18
    },
    {
        "chapterNumber": "1016",
        "numImages": 21
    },
    {
        "chapterNumber": "1017",
        "numImages": 18
    },
    {
        "chapterNumber": "1018",
        "numImages": 16
    },
    {
        "chapterNumber": "1019",
        "numImages": 19
    },
    {
        "chapterNumber": "1020",
        "numImages": 18
    },
    {
        "chapterNumber": "1021",
        "numImages": 16
    },
    {
        "chapterNumber": "1022",
        "numImages": 16
    },
    {
        "chapterNumber": "1023",
        "numImages": 17
    },
    {
        "chapterNumber": "1024",
        "numImages": 17
    },
    {
        "chapterNumber": "1025",
        "numImages": 18
    },
    {
        "chapterNumber": "1026",
        "numImages": 21
    },
    {
        "chapterNumber": "1027",
        "numImages": 17
    },
    {
        "chapterNumber": "1028",
        "numImages": 18
    },
    {
        "chapterNumber": "1029",
        "numImages": 15
    },
    {
        "chapterNumber": "1030",
        "numImages": 15
    },
    {
        "chapterNumber": "1031",
        "numImages": 18
    },
    {
        "chapterNumber": "1032",
        "numImages": 18
    },
    {
        "chapterNumber": "1033",
        "numImages": 18
    },
    {
        "chapterNumber": "1034",
        "numImages": 14
    },
    {
        "chapterNumber": "1035",
        "numImages": 20
    },
    {
        "chapterNumber": "1036",
        "numImages": 24
    },
    {
        "chapterNumber": "1037",
        "numImages": 16
    },
    {
        "chapterNumber": "1038",
        "numImages": 15
    },
    {
        "chapterNumber": "1039",
        "numImages": 16
    },
    {
        "chapterNumber": "1040",
        "numImages": 13
    },
    {
        "chapterNumber": "1041",
        "numImages": 17
    },
    {
        "chapterNumber": "1042",
        "numImages": 30
    },
    {
        "chapterNumber": "1043",
        "numImages": 15
    },
    {
        "chapterNumber": "1044",
        "numImages": 14
    },
    {
        "chapterNumber": "1045",
        "numImages": 19
    },
    {
        "chapterNumber": "1046",
        "numImages": 17
    },
    {
        "chapterNumber": "1047",
        "numImages": 17
    },
    {
        "chapterNumber": "1048",
        "numImages": 14
    },
    {
        "chapterNumber": "1049",
        "numImages": 13
    },
    {
        "chapterNumber": "1050",
        "numImages": 14
    },
    {
        "chapterNumber": "1051",
        "numImages": 15
    },
    {
        "chapterNumber": "1052",
        "numImages": 17
    },
    {
        "chapterNumber": "1053",
        "numImages": 15
    },
    {
        "chapterNumber": "1054",
        "numImages": 16
    },
    {
        "chapterNumber": "1054a",
        "numImages": 41
    },
    {
        "chapterNumber": "1055",
        "numImages": 15
    },
    {
        "chapterNumber": "1056",
        "numImages": 16
    },
    {
        "chapterNumber": "1057",
        "numImages": 18
    },
    {
        "chapterNumber": "1058",
        "numImages": 17
    },
    {
        "chapterNumber": "1059",
        "numImages": 17
    },
    {
        "chapterNumber": "1060",
        "numImages": 17
    },
    {
        "chapterNumber": "1061",
        "numImages": 30
    },
    {
        "chapterNumber": "1062",
        "numImages": 30
    },
    {
        "chapterNumber": "1063",
        "numImages": 13
    },
    {
        "chapterNumber": "1064",
        "numImages": 15
    },
    {
        "chapterNumber": "1065",
        "numImages": 15
    },
    {
        "chapterNumber": "1066",
        "numImages": 16
    },
    {
        "chapterNumber": "1067",
        "numImages": 16
    },
    {
        "chapterNumber": "1068",
        "numImages": 17
    },
    {
        "chapterNumber": "1069",
        "numImages": 15
    },
    {
        "chapterNumber": "1070",
        "numImages": 17
    },
    {
        "chapterNumber": "1071",
        "numImages": 1
    },
    {
        "chapterNumber": "1072",
        "numImages": 16
    },
    {
        "chapterNumber": "1073",
        "numImages": 16
    },
    {
        "chapterNumber": "1074",
        "numImages": 17
    },
    {
        "chapterNumber": "1075",
        "numImages": 15
    },
    {
        "chapterNumber": "1076",
        "numImages": 15
    },
    {
        "chapterNumber": "1077",
        "numImages": 18
    },
    {
        "chapterNumber": "1078",
        "numImages": 15
    },
    {
        "chapterNumber": "1079",
        "numImages": 13
    },
    {
        "chapterNumber": "1080",
        "numImages": 16
    },
    {
        "chapterNumber": "1081",
        "numImages": 15
    },
    {
        "chapterNumber": "1082",
        "numImages": 15
    },
    {
        "chapterNumber": "1083",
        "numImages": 15
    },
    {
        "chapterNumber": "1084",
        "numImages": 15
    },
    {
        "chapterNumber": "1085",
        "numImages": 15
    },
    {
        "chapterNumber": "1086",
        "numImages": 14
    },
    {
        "chapterNumber": "1087",
        "numImages": 14
    },
    {
        "chapterNumber": "1088",
        "numImages": 16
    },
    {
        "chapterNumber": "1089",
        "numImages": 16
    },
    {
        "chapterNumber": "1090",
        "numImages": 15
    },
    {
        "chapterNumber": "1091",
        "numImages": 17
    },
    {
        "chapterNumber": "1092",
        "numImages": 17
    },
    {
        "chapterNumber": "1093",
        "numImages": 16
    },
    {
        "chapterNumber": "1094",
        "numImages": 19
    },
    {
        "chapterNumber": "1095",
        "numImages": 15
    },
    {
        "chapterNumber": "1096",
        "numImages": 15
    },
    {
        "chapterNumber": "1097",
        "numImages": 14
    },
    {
        "chapterNumber": "1098",
        "numImages": 15
    },
    {
        "chapterNumber": "1099",
        "numImages": 17
    },
    {
        "chapterNumber": "1100",
        "numImages": 17
    },
    {
        "chapterNumber": "1101",
        "numImages": 18
    },
    {
        "chapterNumber": "1102",
        "numImages": 17
    },
    {
        "chapterNumber": "1103",
        "numImages": 18
    },
    {
        "chapterNumber": "1104",
        "numImages": 14
    },
    {
        "chapterNumber": "1105",
        "numImages": 11
    },
    {
        "chapterNumber": "1106",
        "numImages": 13
    },
    {
        "chapterNumber": "1107",
        "numImages": 15
    }

];