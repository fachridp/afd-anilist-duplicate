import _ from "lodash";

const CURRENT_YEAR = new Date().getFullYear();
export const MIN_YEAR = 1970;
export const END_YEAR = CURRENT_YEAR + 1;
export const YEAR_RANGE = _.range(MIN_YEAR, END_YEAR + 1).reverse();
export const YEAR_RANGE_OBJ = YEAR_RANGE.map((item, index) => ({ id: index + 1, name: item }));
const MIN_EPS = 0;
const MAX_EPS = 150;
const MIN_DUR = 0;
const MAX_DUR = 170;
const MIN_TAG = 0;
const MAX_TAG = 100;

export const BROWSE_ITEMS = [
 {
  id: 1,
  name: 'Manga'
 },
 {
  id: 2,
  name: 'Characters'
 },
 {
  id: 3,
  name: "Staff"
 },
 {
  id: 4,
  name: "Studios"
 },
 {
  id: 5,
  name: "Users"
 },
];

export const SCREEN_SIZES = {
 medium: 768,
 large: 1024,
}

export const DROPDOWN_ITEMS = {
 genres: [
  {
   id: 1,
   name: "Action",
  },
  {
   id: 2,
   name: "Adventure",
  },
  {
   id: 3,
   name: "Comedy",
  },
  {
   id: 4,
   name: "Drama",
  },
  {
   id: 5,
   name: "Ecchi",
  },
  {
   id: 6,
   name: "Fantasy",
  },
  {
   id: 7,
   name: "Horror",
  },
  {
   id: 8,
   name: "Mahou Shoujo",
  },
  {
   id: 9,
   name: "Mecha",
  },
  {
   id: 10,
   name: "Music",
  },
  {
   id: 11,
   name: "Mystery",
  },
  {
   id: 12,
   name: "Psychological",
  },
  {
   id: 13,
   name: "Romance",
  },
  {
   id: 14,
   name: "Sci-Fi",
  },
  {
   id: 15,
   name: "Slice of Life",
  },
  {
   id: 16,
   name: "Sports",
  },
  {
   id: 17,
   name: "Supernatural",
  },
  {
   id: 18,
   name: "Thriller",
  },
 ],
 tags: [
  {
   "__typename": "MediaTag",
   "id": 206,
   "name": "4-koma",
   "category": "Technical",
   "description": "A manga in the 'yonkoma' format, which consists of four equal-sized panels arranged in a vertical strip."
  },
  {
   "__typename": "MediaTag",
   "id": 710,
   "name": "Achromatic",
   "category": "Technical",
   "description": "Contains animation that is primarily done in black and white."
  },
  {
   "__typename": "MediaTag",
   "id": 156,
   "name": "Achronological Order",
   "category": "Setting-Time",
   "description": "Chapters or episodes do not occur in chronological order."
  },
  {
   "__typename": "MediaTag",
   "id": 1612,
   "name": "Acrobatics",
   "category": "Theme-Game-Sport",
   "description": "The art of jumping, tumbling, and balancing. Often paired with trapeze, trampolining, tightropes, or general gymnastics."
  },
  {
   "__typename": "MediaTag",
   "id": 548,
   "name": "Acting",
   "category": "Theme-Arts",
   "description": "Centers around actors or the acting industry."
  },
  {
   "__typename": "MediaTag",
   "id": 1052,
   "name": "Adoption",
   "category": "Theme-Other",
   "description": "Features a character who has been adopted by someone who is neither of their biological parents."
  },
  {
   "__typename": "MediaTag",
   "id": 505,
   "name": "Advertisement",
   "category": "Technical",
   "description": "Produced in order to promote the products of a certain company."
  },
  {
   "__typename": "MediaTag",
   "id": 147,
   "name": "Afterlife",
   "category": "Setting-Universe",
   "description": "Partly or completely set in the afterlife."
  },
  {
   "__typename": "MediaTag",
   "id": 138,
   "name": "Age Gap",
   "category": "Theme-Romance",
   "description": "Prominently features romantic relations between people with a significant age difference."
  },
  {
   "__typename": "MediaTag",
   "id": 488,
   "name": "Age Regression",
   "category": "Cast-Traits",
   "description": "Prominently features a character who was returned to a younger state."
  },
  {
   "__typename": "MediaTag",
   "id": 334,
   "name": "Agender",
   "category": "Cast-Traits",
   "description": "Prominently features agender characters."
  },
  {
   "__typename": "MediaTag",
   "id": 909,
   "name": "Agriculture",
   "category": "Theme-Slice of Life",
   "description": "Prominently features agriculture practices."
  },
  {
   "__typename": "MediaTag",
   "id": 279,
   "name": "Ahegao",
   "category": "Sexual Content",
   "description": "Features a character making an exaggerated orgasm face."
  },
  {
   "__typename": "MediaTag",
   "id": 167,
   "name": "Airsoft",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of airsoft."
  },
  {
   "__typename": "MediaTag",
   "id": 1291,
   "name": "Alchemy",
   "category": "Theme-Fantasy",
   "description": "Features character(s) who practice alchemy."
  },
  {
   "__typename": "MediaTag",
   "id": 191,
   "name": "Aliens",
   "category": "Cast-Traits",
   "description": "Prominently features extraterrestrial lifeforms."
  },
  {
   "__typename": "MediaTag",
   "id": 146,
   "name": "Alternate Universe",
   "category": "Setting-Universe",
   "description": "Features multiple alternate universes in the same series."
  },
  {
   "__typename": "MediaTag",
   "id": 314,
   "name": "American Football",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of American football."
  },
  {
   "__typename": "MediaTag",
   "id": 240,
   "name": "Amnesia",
   "category": "Cast-Traits",
   "description": "Prominently features a character(s) with memory loss."
  },
  {
   "__typename": "MediaTag",
   "id": 652,
   "name": "Amputation",
   "category": "Sexual Content",
   "description": "Features amputation or amputees."
  },
  {
   "__typename": "MediaTag",
   "id": 490,
   "name": "Anachronism",
   "category": "Setting-Time",
   "description": "Prominently features elements that are out of place in the historical period the work takes place in, particularly modern elements in a historical setting."
  },
  {
   "__typename": "MediaTag",
   "id": 185,
   "name": "Anal Sex",
   "category": "Sexual Content",
   "description": "Features sexual penetration of the anal cavity."
  },
  {
   "__typename": "MediaTag",
   "id": 1598,
   "name": "Ancient China",
   "category": "Setting-Time",
   "description": "Setting in ancient china, does not apply to fantasy settings."
  },
  {
   "__typename": "MediaTag",
   "id": 1068,
   "name": "Angels",
   "category": "Cast-Traits",
   "description": "Prominently features spiritual beings usually represented with wings and halos and believed to be attendants of God."
  },
  {
   "__typename": "MediaTag",
   "id": 433,
   "name": "Animals",
   "category": "Theme-Other",
   "description": "Prominently features animal characters in a leading role."
  },
  {
   "__typename": "MediaTag",
   "id": 471,
   "name": "Anthology",
   "category": "Technical",
   "description": "A collection of separate works collated into a single release."
  },
  {
   "__typename": "MediaTag",
   "id": 1304,
   "name": "Anthropomorphism",
   "category": "Cast-Traits",
   "description": "Contains non-human character(s) that have attributes or characteristics of a human being."
  },
  {
   "__typename": "MediaTag",
   "id": 104,
   "name": "Anti-Hero",
   "category": "Cast-Main Cast",
   "description": "Features a protagonist who lacks conventional heroic attributes and may be considered a borderline villain."
  },
  {
   "__typename": "MediaTag",
   "id": 251,
   "name": "Archery",
   "category": "Theme-Action",
   "description": "Centers around the sport of archery, or prominently features the use of archery in combat."
  },
  {
   "__typename": "MediaTag",
   "id": 629,
   "name": "Armpits",
   "category": "Sexual Content",
   "description": "Features the sexual depiction or stimulation of a character's armpits."
  },
  {
   "__typename": "MediaTag",
   "id": 1681,
   "name": "Aromantic",
   "category": "Cast-Traits",
   "description": "Features a character who experiences little to no romantic attraction."
  },
  {
   "__typename": "MediaTag",
   "id": 1578,
   "name": "Arranged Marriage",
   "category": "Cast-Traits",
   "description": "Features two characters made to marry each other, usually by their family."
  },
  {
   "__typename": "MediaTag",
   "id": 517,
   "name": "Artificial Intelligence",
   "category": "Cast-Traits",
   "description": "Intelligent non-organic machines that work and react similarly to humans."
  },
  {
   "__typename": "MediaTag",
   "id": 622,
   "name": "Asexual",
   "category": "Cast-Traits",
   "description": "Features a character who isn't sexually attracted to people of any sex or gender."
  },
  {
   "__typename": "MediaTag",
   "id": 315,
   "name": "Ashikoki",
   "category": "Sexual Content",
   "description": "Footjob; features stimulation of genitalia by feet."
  },
  {
   "__typename": "MediaTag",
   "id": 651,
   "name": "Asphyxiation",
   "category": "Sexual Content",
   "description": "Features breath play."
  },
  {
   "__typename": "MediaTag",
   "id": 322,
   "name": "Assassins",
   "category": "Theme-Other-Organisations",
   "description": "Centers around characters who murder people as a profession."
  },
  {
   "__typename": "MediaTag",
   "id": 623,
   "name": "Astronomy",
   "category": "Theme-Other",
   "description": "Relating or centered around the study of celestial objects and phenomena, space, or the universe."
  },
  {
   "__typename": "MediaTag",
   "id": 264,
   "name": "Athletics",
   "category": "Theme-Game-Sport",
   "description": "Centers around sporting events that involve competitive running, jumping, throwing, or walking."
  },
  {
   "__typename": "MediaTag",
   "id": 364,
   "name": "Augmented Reality",
   "category": "Setting-Universe",
   "description": "Prominently features events with augmented reality as the main setting."
  },
  {
   "__typename": "MediaTag",
   "id": 519,
   "name": "Autobiographical",
   "category": "Theme-Other",
   "description": "Real stories and anecdotes written by the author about their own life."
  },
  {
   "__typename": "MediaTag",
   "id": 355,
   "name": "Aviation",
   "category": "Theme-Other-Vehicle",
   "description": "Regarding the flying or operation of aircraft."
  },
  {
   "__typename": "MediaTag",
   "id": 235,
   "name": "Badminton",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of badminton."
  },
  {
   "__typename": "MediaTag",
   "id": 110,
   "name": "Band",
   "category": "Theme-Arts-Music",
   "description": "Main cast is a group of musicians."
  },
  {
   "__typename": "MediaTag",
   "id": 161,
   "name": "Bar",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a bar."
  },
  {
   "__typename": "MediaTag",
   "id": 149,
   "name": "Baseball",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of baseball."
  },
  {
   "__typename": "MediaTag",
   "id": 192,
   "name": "Basketball",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of basketball."
  },
  {
   "__typename": "MediaTag",
   "id": 101,
   "name": "Battle Royale",
   "category": "Theme-Action",
   "description": "Centers around a fierce group competition, often violent and with only one winner."
  },
  {
   "__typename": "MediaTag",
   "id": 239,
   "name": "Biographical",
   "category": "Theme-Other",
   "description": "Based on true stories of real persons living or dead, written by another."
  },
  {
   "__typename": "MediaTag",
   "id": 294,
   "name": "Bisexual",
   "category": "Theme-Romance",
   "description": "Features a character who is romantically or sexually attracted to people of more than one sex or gender."
  },
  {
   "__typename": "MediaTag",
   "id": 309,
   "name": "Blackmail",
   "category": "Sexual Content",
   "description": "Features a character blackmailing another into performing sexual acts."
  },
  {
   "__typename": "MediaTag",
   "id": 1492,
   "name": "Board Game",
   "category": "Theme-Game",
   "description": "Centers around characters playing board games."
  },
  {
   "__typename": "MediaTag",
   "id": 1489,
   "name": "Boarding School",
   "category": "Setting-Scene",
   "description": "Features characters attending a boarding school."
  },
  {
   "__typename": "MediaTag",
   "id": 639,
   "name": "Body Horror",
   "category": "Theme-Other",
   "description": "Features characters who undergo horrific transformations or disfigurement, often to their own detriment."
  },
  {
   "__typename": "MediaTag",
   "id": 154,
   "name": "Body Swapping",
   "category": "Theme-Fantasy",
   "description": "Centers around individuals swapping bodies with one another."
  },
  {
   "__typename": "MediaTag",
   "id": 246,
   "name": "Bondage",
   "category": "Sexual Content",
   "description": "Features BDSM, with or without the use of accessories."
  },
  {
   "__typename": "MediaTag",
   "id": 126,
   "name": "Boobjob",
   "category": "Sexual Content",
   "description": "Features the stimulation of male genitalia by breasts."
  },
  {
   "__typename": "MediaTag",
   "id": 1632,
   "name": "Bowling",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of Bowling."
  },
  {
   "__typename": "MediaTag",
   "id": 169,
   "name": "Boxing",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of boxing."
  },
  {
   "__typename": "MediaTag",
   "id": 75,
   "name": "Boys' Love",
   "category": "Theme-Romance",
   "description": "Prominently features romance between two males, not inherently sexual."
  },
  {
   "__typename": "MediaTag",
   "id": 171,
   "name": "Bullying",
   "category": "Theme-Drama",
   "description": "Prominently features the use of force for intimidation, often in a school setting."
  },
  {
   "__typename": "MediaTag",
   "id": 812,
   "name": "Butler",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a butler."
  },
  {
   "__typename": "MediaTag",
   "id": 204,
   "name": "Calligraphy",
   "category": "Theme-Arts",
   "description": "Centers around the art of calligraphy."
  },
  {
   "__typename": "MediaTag",
   "id": 1724,
   "name": "Camping",
   "category": "Setting-Scene",
   "description": "Features the recreational activity of camping, either in a tent, vehicle, or simply sleeping outdoors."
  },
  {
   "__typename": "MediaTag",
   "id": 870,
   "name": "Cannibalism",
   "category": "Theme-Other",
   "description": "Prominently features the act of consuming another member of the same species as food."
  },
  {
   "__typename": "MediaTag",
   "id": 178,
   "name": "Card Battle",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centers around individuals competing in card games."
  },
  {
   "__typename": "MediaTag",
   "id": 10,
   "name": "Cars",
   "category": "Theme-Other-Vehicle",
   "description": "Centers around the use of automotive vehicles."
  },
  {
   "__typename": "MediaTag",
   "id": 632,
   "name": "Centaur",
   "category": "Cast-Traits",
   "description": "Prominently features a character with a human upper body and the lower body of a horse."
  },
  {
   "__typename": "MediaTag",
   "id": 1573,
   "name": "Cervix Penetration",
   "category": "Sexual Content",
   "description": "A sexual act in which the cervix is visibly penetrated."
  },
  {
   "__typename": "MediaTag",
   "id": 90,
   "name": "CGI",
   "category": "Technical",
   "description": "Prominently features scenes created with computer-generated imagery."
  },
  {
   "__typename": "MediaTag",
   "id": 1709,
   "name": "Cheating",
   "category": "Sexual Content",
   "description": "Features a character with a partner shown being intimate with someone else consensually."
  },
  {
   "__typename": "MediaTag",
   "id": 646,
   "name": "Cheerleading",
   "category": "Theme-Game-Sport",
   "description": "Centers around the activity of cheerleading."
  },
  {
   "__typename": "MediaTag",
   "id": 324,
   "name": "Chibi",
   "category": "Theme-Other",
   "description": "Features \"super deformed\" character designs with smaller, rounder proportions and a cute look."
  },
  {
   "__typename": "MediaTag",
   "id": 774,
   "name": "Chimera",
   "category": "Cast-Traits",
   "description": "Features a beast made by combining animals, usually with humans."
  },
  {
   "__typename": "MediaTag",
   "id": 267,
   "name": "Chuunibyou",
   "category": "Cast-Traits",
   "description": "Prominently features a character with \"Middle School 2nd Year Syndrome\", who either acts like a know-it-all adult or falsely believes they have special powers."
  },
  {
   "__typename": "MediaTag",
   "id": 476,
   "name": "Circus",
   "category": "Setting-Scene",
   "description": "Prominently features a circus."
  },
  {
   "__typename": "MediaTag",
   "id": 1403,
   "name": "Class Struggle",
   "category": "Theme-Drama",
   "description": "Contains conflict born between the different social classes. Generally between an dominant elite and a suffering oppressed group."
  },
  {
   "__typename": "MediaTag",
   "id": 227,
   "name": "Classic Literature",
   "category": "Theme-Arts",
   "description": "Discusses or adapts a work of classic world literature."
  },
  {
   "__typename": "MediaTag",
   "id": 1673,
   "name": "Classical Music",
   "category": "Theme-Arts-Music",
   "description": "Centers on the musical style of classical, not to be applied to anime that use classical in its soundtrack."
  },
  {
   "__typename": "MediaTag",
   "id": 1342,
   "name": "Clone",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is an artificial exact copy of another organism."
  },
  {
   "__typename": "MediaTag",
   "id": 1537,
   "name": "Coastal",
   "category": "Setting-Scene",
   "description": "Story prominently takes place near the beach or around a coastal area/town. Setting is near the ocean."
  },
  {
   "__typename": "MediaTag",
   "id": 404,
   "name": "College",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a college or university."
  },
  {
   "__typename": "MediaTag",
   "id": 102,
   "name": "Coming of Age",
   "category": "Theme-Drama",
   "description": "Centers around a character's transition from childhood to adulthood."
  },
  {
   "__typename": "MediaTag",
   "id": 456,
   "name": "Conspiracy",
   "category": "Theme-Drama",
   "description": "Contains one or more factions controlling or attempting to control the world from the shadows."
  },
  {
   "__typename": "MediaTag",
   "id": 636,
   "name": "Cosmic Horror",
   "category": "Theme-Other",
   "description": "A type of horror that emphasizes human insignificance in the grand scope of cosmic reality; fearing the unknown and being powerless to fight it."
  },
  {
   "__typename": "MediaTag",
   "id": 328,
   "name": "Cosplay",
   "category": "Cast-Traits",
   "description": "Features dressing up as a different character or profession."
  },
  {
   "__typename": "MediaTag",
   "id": 1648,
   "name": "Cowboys",
   "category": "Cast-Traits",
   "description": "Features Western or Western-inspired cowboys."
  },
  {
   "__typename": "MediaTag",
   "id": 648,
   "name": "Crime",
   "category": "Theme-Other",
   "description": "Centers around unlawful activities punishable by the state or other authority."
  },
  {
   "__typename": "MediaTag",
   "id": 1589,
   "name": "Criminal Organization",
   "category": "Theme-Other-Organisations",
   "description": "Prominently features a group of people who commit crimes for illicit or violent purposes."
  },
  {
   "__typename": "MediaTag",
   "id": 186,
   "name": "Crossdressing",
   "category": "Cast-Traits",
   "description": "Prominently features a character dressing up as the opposite sex."
  },
  {
   "__typename": "MediaTag",
   "id": 158,
   "name": "Crossover",
   "category": "Theme-Other",
   "description": "Centers around the placement of two or more otherwise discrete fictional characters, settings, or universes into the context of a single story."
  },
  {
   "__typename": "MediaTag",
   "id": 586,
   "name": "Cult",
   "category": "Theme-Other-Organisations",
   "description": "Features a social group with unorthodox religious, spiritual, or philosophical beliefs and practices."
  },
  {
   "__typename": "MediaTag",
   "id": 326,
   "name": "Cultivation",
   "category": "Theme-Fantasy",
   "description": "Features characters using training, often martial arts-related, and other special methods to cultivate life force and gain strength or immortality."
  },
  {
   "__typename": "MediaTag",
   "id": 1273,
   "name": "Cumflation",
   "category": "Sexual Content",
   "description": "The stomach area expands outward like a balloon due to being filled specifically with semen."
  },
  {
   "__typename": "MediaTag",
   "id": 135,
   "name": "Cunnilingus",
   "category": "Sexual Content",
   "description": "Features oral sex performed on female genitalia."
  },
  {
   "__typename": "MediaTag",
   "id": 1689,
   "name": "Curses",
   "category": "Theme-Fantasy",
   "description": "Features a character, object or area that has been cursed, usually by a malevolent supernatural force."
  },
  {
   "__typename": "MediaTag",
   "id": 1063,
   "name": "Cute Boys Doing Cute Things",
   "category": "Theme-Slice of Life",
   "description": "Centers around male characters doing cute activities, usually with little to no emphasis on drama and conflict."
  },
  {
   "__typename": "MediaTag",
   "id": 92,
   "name": "Cute Girls Doing Cute Things",
   "category": "Theme-Slice of Life",
   "description": "Centers around female characters doing cute activities, usually with little to no emphasis on drama and conflict.\n"
  },
  {
   "__typename": "MediaTag",
   "id": 108,
   "name": "Cyberpunk",
   "category": "Theme-Sci-Fi",
   "description": "Set in a future of advanced technological and scientific achievements that have resulted in social disorder."
  },
  {
   "__typename": "MediaTag",
   "id": 801,
   "name": "Cyborg",
   "category": "Cast-Traits",
   "description": "Prominently features a human character whose physiological functions are aided or enhanced by artificial means."
  },
  {
   "__typename": "MediaTag",
   "id": 151,
   "name": "Cycling",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of cycling."
  },
  {
   "__typename": "MediaTag",
   "id": 209,
   "name": "Dancing",
   "category": "Theme-Arts-Music",
   "description": "Centers around the art of dance."
  },
  {
   "__typename": "MediaTag",
   "id": 615,
   "name": "Death Game",
   "category": "Theme-Other",
   "description": "Features characters participating in a game, where failure results in death."
  },
  {
   "__typename": "MediaTag",
   "id": 1234,
   "name": "Deepthroat",
   "category": "Sexual Content",
   "description": "Features oral sex where the majority of the erect male genitalia is inside another person's mouth, usually stimulating some gagging in the back of their throat."
  },
  {
   "__typename": "MediaTag",
   "id": 129,
   "name": "Defloration",
   "category": "Sexual Content",
   "description": "Features a female character who has never had sexual relations (until now)."
  },
  {
   "__typename": "MediaTag",
   "id": 395,
   "name": "Delinquents",
   "category": "Cast-Traits",
   "description": "Features characters with a notorious image and attitude, sometimes referred to as \"yankees\"."
  },
  {
   "__typename": "MediaTag",
   "id": 15,
   "name": "Demons",
   "category": "Cast-Traits",
   "description": "Prominently features malevolent otherworldly creatures."
  },
  {
   "__typename": "MediaTag",
   "id": 654,
   "name": "Denpa",
   "category": "Theme-Other",
   "description": "Works that feature themes of social dissociation, delusions, and other issues like suicide, bullying, self-isolation, paranoia, and technological necessity in daily lives. Classic iconography: telephone poles, rooftops, and trains."
  },
  {
   "__typename": "MediaTag",
   "id": 1453,
   "name": "Desert",
   "category": "Setting-Scene",
   "description": "Prominently features a desert environment."
  },
  {
   "__typename": "MediaTag",
   "id": 694,
   "name": "Detective",
   "category": "Cast-Traits",
   "description": "Features a character who investigates and solves crimes."
  },
  {
   "__typename": "MediaTag",
   "id": 1038,
   "name": "DILF",
   "category": "Sexual Content",
   "description": "Features sexual intercourse with older men."
  },
  {
   "__typename": "MediaTag",
   "id": 704,
   "name": "Dinosaurs",
   "category": "Cast-Traits",
   "description": "Prominently features Dinosaurs, prehistoric reptiles that went extinct millions of years ago."
  },
  {
   "__typename": "MediaTag",
   "id": 1219,
   "name": "Disability",
   "category": "Cast-Traits",
   "description": "A work that features one or more characters with a physical, mental, cognitive, or developmental condition that impairs, interferes with, or limits the person's ability to engage in certain tasks or actions."
  },
  {
   "__typename": "MediaTag",
   "id": 536,
   "name": "Dissociative Identities",
   "category": "Cast-Traits",
   "description": "A case where one or more people share the same body."
  },
  {
   "__typename": "MediaTag",
   "id": 1511,
   "name": "Double Penetration",
   "category": "Sexual Content",
   "description": "A sexual act in which the vagina/anus are penetrated by two penises/toys."
  },
  {
   "__typename": "MediaTag",
   "id": 224,
   "name": "Dragons",
   "category": "Cast-Traits",
   "description": "Prominently features mythical reptiles which generally have wings and can breathe fire."
  },
  {
   "__typename": "MediaTag",
   "id": 118,
   "name": "Drawing",
   "category": "Theme-Arts",
   "description": "Centers around the art of drawing, including manga and doujinshi."
  },
  {
   "__typename": "MediaTag",
   "id": 489,
   "name": "Drugs",
   "category": "Theme-Other",
   "description": "Prominently features the usage of drugs such as opioids, stimulants, hallucinogens etc."
  },
  {
   "__typename": "MediaTag",
   "id": 658,
   "name": "Dullahan",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a Dullahan, a creature from Irish Folklore with a head that can be detached from its main body."
  },
  {
   "__typename": "MediaTag",
   "id": 604,
   "name": "Dungeon",
   "category": "Setting-Scene",
   "description": "Prominently features a dungeon environment."
  },
  {
   "__typename": "MediaTag",
   "id": 217,
   "name": "Dystopian",
   "category": "Setting-Time",
   "description": "Partly or completely set in a society characterized by poverty, squalor or oppression."
  },
  {
   "__typename": "MediaTag",
   "id": 792,
   "name": "E-Sports",
   "category": "Theme-Game",
   "description": "Prominently features professional video game competitions, tournaments, players, etc."
  },
  {
   "__typename": "MediaTag",
   "id": 1667,
   "name": "Eco-Horror",
   "category": "Theme-Drama",
   "description": "Utilizes a horrifying depiction of ecology to explore man and its relationship with nature."
  },
  {
   "__typename": "MediaTag",
   "id": 248,
   "name": "Economics",
   "category": "Theme-Other",
   "description": "Centers around the field of economics."
  },
  {
   "__typename": "MediaTag",
   "id": 140,
   "name": "Educational",
   "category": "Theme-Other",
   "description": "Primary aim is to educate the audience."
  },
  {
   "__typename": "MediaTag",
   "id": 1666,
   "name": "Elderly Protagonist",
   "category": "Cast-Main Cast",
   "description": "The protagonist is either over 60 years of age, has an elderly appearance, or, in the case of non-humans, is considered elderly for their species."
  },
  {
   "__typename": "MediaTag",
   "id": 598,
   "name": "Elf",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is an elf."
  },
  {
   "__typename": "MediaTag",
   "id": 105,
   "name": "Ensemble Cast",
   "category": "Cast-Main Cast",
   "description": "Features a large cast of characters with (almost) equal screen time and importance to the plot."
  },
  {
   "__typename": "MediaTag",
   "id": 342,
   "name": "Environmental",
   "category": "Theme-Other",
   "description": "Concern with the state of the natural world and how humans interact with it."
  },
  {
   "__typename": "MediaTag",
   "id": 193,
   "name": "Episodic",
   "category": "Technical",
   "description": "Features story arcs that are loosely tied or lack an overarching plot."
  },
  {
   "__typename": "MediaTag",
   "id": 482,
   "name": "Ero Guro",
   "category": "Theme-Other",
   "description": "Japanese literary and artistic movement originating in the 1930's. Works have a focus on grotesque eroticism, sexual corruption, and decadence."
  },
  {
   "__typename": "MediaTag",
   "id": 1722,
   "name": "Erotic Piercings",
   "category": "Sexual Content",
   "description": "Features a type of body modification designed to enhance sexual pleasure and intimacy, and/or decoratively adorns portions of the body considered sexual in nature."
  },
  {
   "__typename": "MediaTag",
   "id": 310,
   "name": "Espionage",
   "category": "Theme-Action",
   "description": "Prominently features characters infiltrating an organization in order to steal sensitive information."
  },
  {
   "__typename": "MediaTag",
   "id": 1564,
   "name": "Estranged Family",
   "category": "Cast-Main Cast",
   "description": "At least one family member of the MC intentionally distances themselves or a family distances themselves from a person related to the MC."
  },
  {
   "__typename": "MediaTag",
   "id": 901,
   "name": "Exhibitionism",
   "category": "Sexual Content",
   "description": "Features the act of exposing oneself in public for sexual pleasure."
  },
  {
   "__typename": "MediaTag",
   "id": 1719,
   "name": "Exorcism",
   "category": "Theme-Fantasy",
   "description": "Involving religious methods of vanquishing youkai, demons, or other supernatural entities."
  },
  {
   "__typename": "MediaTag",
   "id": 130,
   "name": "Facial",
   "category": "Sexual Content",
   "description": "Features sexual ejaculation onto an individual's face."
  },
  {
   "__typename": "MediaTag",
   "id": 1455,
   "name": "Fairy",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a fairy."
  },
  {
   "__typename": "MediaTag",
   "id": 400,
   "name": "Fairy Tale",
   "category": "Theme-Fantasy",
   "description": "This work tells a fairy tale, centers around fairy tales, or is based on a classic fairy tale."
  },
  {
   "__typename": "MediaTag",
   "id": 1657,
   "name": "Fake Relationship",
   "category": "Theme-Drama",
   "description": "When two characters enter a fake relationship that mutually benefits one or both involved."
  },
  {
   "__typename": "MediaTag",
   "id": 87,
   "name": "Family Life",
   "category": "Theme-Slice of Life",
   "description": "Centers around the activities of a family unit."
  },
  {
   "__typename": "MediaTag",
   "id": 410,
   "name": "Fashion",
   "category": "Theme-Arts",
   "description": "Centers around the fashion industry."
  },
  {
   "__typename": "MediaTag",
   "id": 631,
   "name": "Feet",
   "category": "Sexual Content",
   "description": "Features the sexual depiction or stimulation of a character's feet."
  },
  {
   "__typename": "MediaTag",
   "id": 134,
   "name": "Fellatio",
   "category": "Sexual Content",
   "description": "Blowjob; features oral sex performed on male genitalia."
  },
  {
   "__typename": "MediaTag",
   "id": 23,
   "name": "Female Harem",
   "category": "Theme-Romance",
   "description": "Main cast features the protagonist plus several female characters who are romantically interested in them."
  },
  {
   "__typename": "MediaTag",
   "id": 98,
   "name": "Female Protagonist",
   "category": "Cast-Main Cast",
   "description": "Main character is female."
  },
  {
   "__typename": "MediaTag",
   "id": 1456,
   "name": "Femboy",
   "category": "Cast-Traits",
   "description": "Features a boy who exhibits characteristics or behaviors considered in many cultures to be typical of girls."
  },
  {
   "__typename": "MediaTag",
   "id": 1146,
   "name": "Femdom",
   "category": "Sexual Content",
   "description": "Female Dominance. Features sexual acts with a woman in a dominant position."
  },
  {
   "__typename": "MediaTag",
   "id": 1132,
   "name": "Fencing",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of fencing."
  },
  {
   "__typename": "MediaTag",
   "id": 1422,
   "name": "Filmmaking",
   "category": "Theme-Other",
   "description": "Centers around the art of filmmaking."
  },
  {
   "__typename": "MediaTag",
   "id": 613,
   "name": "Firefighters",
   "category": "Theme-Other-Organisations",
   "description": "Centered around the life and activities of rescuers specialised in firefighting."
  },
  {
   "__typename": "MediaTag",
   "id": 212,
   "name": "Fishing",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of fishing."
  },
  {
   "__typename": "MediaTag",
   "id": 1659,
   "name": "Fisting",
   "category": "Sexual Content",
   "description": "A sexual activity that involves inserting one or more hands into the vagina or rectum."
  },
  {
   "__typename": "MediaTag",
   "id": 170,
   "name": "Fitness",
   "category": "Theme-Game-Sport",
   "description": "Centers around exercise with the aim of improving physical health."
  },
  {
   "__typename": "MediaTag",
   "id": 242,
   "name": "Flash",
   "category": "Technical",
   "description": "Created using Flash animation techniques."
  },
  {
   "__typename": "MediaTag",
   "id": 136,
   "name": "Flat Chest",
   "category": "Sexual Content",
   "description": "Features a female character with smaller-than-average breasts."
  },
  {
   "__typename": "MediaTag",
   "id": 142,
   "name": "Food",
   "category": "Theme-Arts",
   "description": "Centers around cooking or food appraisal."
  },
  {
   "__typename": "MediaTag",
   "id": 148,
   "name": "Football",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of football (known in the USA as \"soccer\")."
  },
  {
   "__typename": "MediaTag",
   "id": 198,
   "name": "Foreign",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a country outside the country of origin."
  },
  {
   "__typename": "MediaTag",
   "id": 1277,
   "name": "Found Family",
   "category": "Theme-Other",
   "description": "Features a group of characters with no biological relations that are united in a group providing social support."
  },
  {
   "__typename": "MediaTag",
   "id": 226,
   "name": "Fugitive",
   "category": "Theme-Action",
   "description": "Prominently features a character evading capture by an individual or organization."
  },
  {
   "__typename": "MediaTag",
   "id": 89,
   "name": "Full CGI",
   "category": "Technical",
   "description": "Almost entirely created with computer-generated imagery."
  },
  {
   "__typename": "MediaTag",
   "id": 207,
   "name": "Full Color",
   "category": "Technical",
   "description": "Manga fully colored or drawn in color."
  },
  {
   "__typename": "MediaTag",
   "id": 188,
   "name": "Futanari",
   "category": "Sexual Content",
   "description": "Features female characters with male genitalia."
  },
  {
   "__typename": "MediaTag",
   "id": 91,
   "name": "Gambling",
   "category": "Theme-Other",
   "description": "Centers around the act of gambling."
  },
  {
   "__typename": "MediaTag",
   "id": 106,
   "name": "Gangs",
   "category": "Theme-Other-Organisations",
   "description": "Centers around gang organizations."
  },
  {
   "__typename": "MediaTag",
   "id": 77,
   "name": "Gender Bending",
   "category": "Theme-Other",
   "description": "Prominently features a character who dresses and behaves in a way characteristic of another gender, or has been transformed into a person of another gender."
  },
  {
   "__typename": "MediaTag",
   "id": 220,
   "name": "Ghost",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a ghost."
  },
  {
   "__typename": "MediaTag",
   "id": 443,
   "name": "Go",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centered around the game of Go."
  },
  {
   "__typename": "MediaTag",
   "id": 480,
   "name": "Goblin",
   "category": "Cast-Traits",
   "description": "A goblin is a monstrous creature from European folklore. They are almost always small and grotesque, mischievous or outright malicious, and greedy. Sometimes with magical abilities."
  },
  {
   "__typename": "MediaTag",
   "id": 253,
   "name": "Gods",
   "category": "Cast-Traits",
   "description": "Prominently features a character of divine or religious nature."
  },
  {
   "__typename": "MediaTag",
   "id": 532,
   "name": "Golf",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of golf."
  },
  {
   "__typename": "MediaTag",
   "id": 94,
   "name": "Gore",
   "category": "Theme-Other",
   "description": "Prominently features graphic bloodshed and violence."
  },
  {
   "__typename": "MediaTag",
   "id": 830,
   "name": "Group Sex",
   "category": "Sexual Content",
   "description": "Features more than two participants engaged in sex simultaneously."
  },
  {
   "__typename": "MediaTag",
   "id": 157,
   "name": "Guns",
   "category": "Theme-Action",
   "description": "Prominently features the use of guns in combat."
  },
  {
   "__typename": "MediaTag",
   "id": 356,
   "name": "Gyaru",
   "category": "Cast-Traits",
   "description": "Prominently features a female character who has a distinct American-emulated fashion style, such as tanned skin, bleached hair, and excessive makeup. Also known as gal."
  },
  {
   "__typename": "MediaTag",
   "id": 1591,
   "name": "Hair Pulling",
   "category": "Sexual Content",
   "description": "A sexual act in which the giver will grab the receivers hair and tug whilst giving pleasure from behind."
  },
  {
   "__typename": "MediaTag",
   "id": 1396,
   "name": "Handball",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of handball."
  },
  {
   "__typename": "MediaTag",
   "id": 317,
   "name": "Handjob",
   "category": "Sexual Content",
   "description": "Features the stimulation of genitalia by another's hands."
  },
  {
   "__typename": "MediaTag",
   "id": 99,
   "name": "Henshin",
   "category": "Theme-Fantasy",
   "description": "Prominently features character or costume transformations which often grant special abilities."
  },
  {
   "__typename": "MediaTag",
   "id": 1045,
   "name": "Heterosexual",
   "category": "Theme-Romance",
   "description": "Prominently features a romance between a man and a woman, not inherently sexual."
  },
  {
   "__typename": "MediaTag",
   "id": 282,
   "name": "Hikikomori",
   "category": "Cast-Traits",
   "description": "Prominently features a character who withdraws from social life, often seeking extreme isolation."
  },
  {
   "__typename": "MediaTag",
   "id": 1615,
   "name": "Hip-hop Music",
   "category": "Theme-Arts-Music",
   "description": "Centers on the musical style of hip-hop, not to be applied to anime that use hip-hop in its soundtrack."
  },
  {
   "__typename": "MediaTag",
   "id": 25,
   "name": "Historical",
   "category": "Setting-Time",
   "description": "Partly or completely set during a real period of world history."
  },
  {
   "__typename": "MediaTag",
   "id": 1379,
   "name": "Homeless",
   "category": "Cast-Traits",
   "description": "Prominently features a character that is homeless."
  },
  {
   "__typename": "MediaTag",
   "id": 1525,
   "name": "Horticulture",
   "category": "Theme-Slice of Life",
   "description": "The story prominently features plant care and gardening."
  },
  {
   "__typename": "MediaTag",
   "id": 181,
   "name": "Human Pet",
   "category": "Sexual Content",
   "description": "Features characters in a master-slave relationship where one is the \"owner\" and the other is a \"pet.\""
  },
  {
   "__typename": "MediaTag",
   "id": 1367,
   "name": "Hypersexuality",
   "category": "Sexual Content",
   "description": "Portrays a character with a hypersexuality disorder, compulsive sexual behavior, or sex addiction."
  },
  {
   "__typename": "MediaTag",
   "id": 228,
   "name": "Ice Skating",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of ice skating."
  },
  {
   "__typename": "MediaTag",
   "id": 115,
   "name": "Idol",
   "category": "Cast-Traits",
   "description": "Centers around the life and activities of an idol."
  },
  {
   "__typename": "MediaTag",
   "id": 128,
   "name": "Incest",
   "category": "Sexual Content",
   "description": "Features sexual or romantic relations between characters who are related by blood."
  },
  {
   "__typename": "MediaTag",
   "id": 1523,
   "name": "Inn",
   "category": "Setting-Scene",
   "description": "Partially or completely set in an Inn or Hotel."
  },
  {
   "__typename": "MediaTag",
   "id": 1102,
   "name": "Inseki",
   "category": "Sexual Content",
   "description": "Features sexual or romantic relations among step, adopted, and other non-blood related family members."
  },
  {
   "__typename": "MediaTag",
   "id": 359,
   "name": "Irrumatio",
   "category": "Sexual Content",
   "description": "Oral rape; features a character thrusting their genitalia or a phallic object into the mouth of another character."
  },
  {
   "__typename": "MediaTag",
   "id": 244,
   "name": "Isekai",
   "category": "Theme-Fantasy",
   "description": "Features characters being transported into an alternate world setting and having to adapt to their new surroundings."
  },
  {
   "__typename": "MediaTag",
   "id": 81,
   "name": "Iyashikei",
   "category": "Theme-Slice of Life",
   "description": "Primary aim is to heal the audience through serene depictions of characters' daily lives."
  },
  {
   "__typename": "MediaTag",
   "id": 1672,
   "name": "Jazz Music",
   "category": "Theme-Arts-Music",
   "description": "Centers on the musical style of jazz, not to be applied to anime that use jazz in its soundtrack."
  },
  {
   "__typename": "MediaTag",
   "id": 27,
   "name": "Josei",
   "category": "Demographic",
   "description": "Target demographic is adult females."
  },
  {
   "__typename": "MediaTag",
   "id": 1105,
   "name": "Judo",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of judo."
  },
  {
   "__typename": "MediaTag",
   "id": 276,
   "name": "Kaiju",
   "category": "Theme-Fantasy",
   "description": "Prominently features giant monsters."
  },
  {
   "__typename": "MediaTag",
   "id": 182,
   "name": "Karuta",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centers around the game of karuta."
  },
  {
   "__typename": "MediaTag",
   "id": 254,
   "name": "Kemonomimi",
   "category": "Cast-Traits",
   "description": "Prominently features humanoid characters with animal ears."
  },
  {
   "__typename": "MediaTag",
   "id": 28,
   "name": "Kids",
   "category": "Demographic",
   "description": "Target demographic is young children."
  },
  {
   "__typename": "MediaTag",
   "id": 1419,
   "name": "Kingdom Management",
   "category": "Theme-Drama",
   "description": "Characters in these series take on the responsibility of running a town or kingdom, whether they take control of an existing one, or build their own from the ground up."
  },
  {
   "__typename": "MediaTag",
   "id": 1607,
   "name": "Konbini",
   "category": "Setting-Scene",
   "description": "Predominantly features a convenience store."
  },
  {
   "__typename": "MediaTag",
   "id": 779,
   "name": "Kuudere",
   "category": "Cast-Traits",
   "description": "Prominently features a character who generally retains a cold, blunt and cynical exterior, but once one gets to know them, they have a very warm and loving interior."
  },
  {
   "__typename": "MediaTag",
   "id": 437,
   "name": "Lacrosse",
   "category": "Theme-Game-Sport",
   "description": "A team game played with a ball and lacrosse sticks."
  },
  {
   "__typename": "MediaTag",
   "id": 650,
   "name": "Lactation",
   "category": "Sexual Content",
   "description": "Features breast milk play and production."
  },
  {
   "__typename": "MediaTag",
   "id": 516,
   "name": "Language Barrier",
   "category": "Theme-Other",
   "description": "A barrier to communication between people who are unable to speak a common language."
  },
  {
   "__typename": "MediaTag",
   "id": 137,
   "name": "Large Breasts",
   "category": "Sexual Content",
   "description": "Features a character with larger-than-average breasts."
  },
  {
   "__typename": "MediaTag",
   "id": 483,
   "name": "LGBTQ+ Themes",
   "category": "Theme-Other",
   "description": "Prominently features characters or themes associated with the LGBTQ+ community, such as sexuality or gender identity."
  },
  {
   "__typename": "MediaTag",
   "id": 466,
   "name": "Lost Civilization",
   "category": "Theme-Other",
   "description": "Featuring a civilization with few ruins or records that exist in present day knowledge."
  },
  {
   "__typename": "MediaTag",
   "id": 139,
   "name": "Love Triangle",
   "category": "Theme-Romance",
   "description": "Centered around romantic feelings between more than two people. Includes all love polygons."
  },
  {
   "__typename": "MediaTag",
   "id": 107,
   "name": "Mafia",
   "category": "Theme-Other-Organisations",
   "description": "Centered around Italian organised crime syndicates."
  },
  {
   "__typename": "MediaTag",
   "id": 29,
   "name": "Magic",
   "category": "Theme-Fantasy",
   "description": "Prominently features magical elements or the use of magic."
  },
  {
   "__typename": "MediaTag",
   "id": 117,
   "name": "Mahjong",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centered around the game of mahjong."
  },
  {
   "__typename": "MediaTag",
   "id": 249,
   "name": "Maids",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a maid."
  },
  {
   "__typename": "MediaTag",
   "id": 1140,
   "name": "Makeup",
   "category": "Theme-Arts",
   "description": "Centers around the makeup industry."
  },
  {
   "__typename": "MediaTag",
   "id": 123,
   "name": "Male Harem",
   "category": "Theme-Romance",
   "description": "Main cast features the protagonist plus several male characters who are romantically interested in them."
  },
  {
   "__typename": "MediaTag",
   "id": 1450,
   "name": "Male Pregnancy",
   "category": "Sexual Content",
   "description": "Features pregnant male characters in a sexual context."
  },
  {
   "__typename": "MediaTag",
   "id": 82,
   "name": "Male Protagonist",
   "category": "Cast-Main Cast",
   "description": "Main character is male."
  },
  {
   "__typename": "MediaTag",
   "id": 1433,
   "name": "Marriage",
   "category": "Theme-Other",
   "description": "Centers around marriage between two or more characters."
  },
  {
   "__typename": "MediaTag",
   "id": 30,
   "name": "Martial Arts",
   "category": "Theme-Action",
   "description": "Centers around the use of traditional hand-to-hand combat."
  },
  {
   "__typename": "MediaTag",
   "id": 999,
   "name": "Masochism",
   "category": "Sexual Content",
   "description": "Prominently features characters who get sexual pleasure from being hurt or controlled by others."
  },
  {
   "__typename": "MediaTag",
   "id": 131,
   "name": "Masturbation",
   "category": "Sexual Content",
   "description": "Features erotic stimulation of one's own genitalia or other erogenous regions."
  },
  {
   "__typename": "MediaTag",
   "id": 1624,
   "name": "Matchmaking",
   "category": "Theme-Romance",
   "description": "Prominently features either a matchmaker or events with the intent of matchmaking with eventual marriage in sight."
  },
  {
   "__typename": "MediaTag",
   "id": 1653,
   "name": "Mating Press",
   "category": "Sexual Content",
   "description": "Features the sex position in which two partners face each other, with one of them thrusting downwards and the other's legs tucked up towards their head."
  },
  {
   "__typename": "MediaTag",
   "id": 1526,
   "name": "Matriarchy",
   "category": "Setting",
   "description": "Prominently features a country that is ruled by a Queen or a society that is dominated by female inheritance."
  },
  {
   "__typename": "MediaTag",
   "id": 659,
   "name": "Medicine",
   "category": "Theme-Other",
   "description": "Centered around the activities of people working in the field of medicine."
  },
  {
   "__typename": "MediaTag",
   "id": 365,
   "name": "Memory Manipulation",
   "category": "Theme-Other",
   "description": "Prominently features a character(s) who has had their memories altered."
  },
  {
   "__typename": "MediaTag",
   "id": 558,
   "name": "Mermaid",
   "category": "Cast-Traits",
   "description": "A mythological creature with the body of a human and the tail of a fish."
  },
  {
   "__typename": "MediaTag",
   "id": 144,
   "name": "Meta",
   "category": "Theme-Other",
   "description": "Features fourth wall-breaking references to itself or genre tropes."
  },
  {
   "__typename": "MediaTag",
   "id": 1675,
   "name": "Metal Music",
   "category": "Theme-Arts-Music",
   "description": "Centers on the musical style of metal, not to be applied to anime that use metal in its soundtrack."
  },
  {
   "__typename": "MediaTag",
   "id": 187,
   "name": "MILF",
   "category": "Sexual Content",
   "description": "Features sexual intercourse with older women."
  },
  {
   "__typename": "MediaTag",
   "id": 34,
   "name": "Military",
   "category": "Theme-Other-Organisations",
   "description": "Centered around the life and activities of military personnel."
  },
  {
   "__typename": "MediaTag",
   "id": 1361,
   "name": "Mixed Gender Harem",
   "category": "Theme-Romance",
   "description": "Main cast features the protagonist plus several people, regardless of gender, who are romantically interested in them."
  },
  {
   "__typename": "MediaTag",
   "id": 1090,
   "name": "Monster Boy",
   "category": "Cast-Traits",
   "description": "Prominently features a male character who is a part-monster."
  },
  {
   "__typename": "MediaTag",
   "id": 259,
   "name": "Monster Girl",
   "category": "Cast-Traits",
   "description": "Prominently features a female character who is part-monster."
  },
  {
   "__typename": "MediaTag",
   "id": 176,
   "name": "Mopeds",
   "category": "Theme-Other-Vehicle",
   "description": "Prominently features mopeds."
  },
  {
   "__typename": "MediaTag",
   "id": 173,
   "name": "Motorcycles",
   "category": "Theme-Other-Vehicle",
   "description": "Prominently features the use of motorcycles."
  },
  {
   "__typename": "MediaTag",
   "id": 1544,
   "name": "Mountaineering",
   "category": "Theme-Other",
   "description": "Prominently features characters discussing or hiking mountains."
  },
  {
   "__typename": "MediaTag",
   "id": 265,
   "name": "Musical Theater",
   "category": "Theme-Arts-Music",
   "description": "Features a performance that combines songs, spoken dialogue, acting, and dance."
  },
  {
   "__typename": "MediaTag",
   "id": 208,
   "name": "Mythology",
   "category": "Theme-Fantasy",
   "description": "Prominently features mythological elements, especially those from religious or cultural tradition."
  },
  {
   "__typename": "MediaTag",
   "id": 125,
   "name": "Nakadashi",
   "category": "Sexual Content",
   "description": "Creampie; features sexual ejaculation inside of a character."
  },
  {
   "__typename": "MediaTag",
   "id": 1501,
   "name": "Natural Disaster",
   "category": "Setting-Scene",
   "description": "It focuses on catastrophic events of natural origin, such as earthquakes, tsunamis,  volcanic eruptions, and severe storms. These works often present situations of extreme danger in which the characters struggle to survive and overcome the adversity."
  },
  {
   "__typename": "MediaTag",
   "id": 1243,
   "name": "Necromancy",
   "category": "Theme-Fantasy",
   "description": "When the dead are summoned as spirits, skeletons, or the undead, usually for the purpose of gaining information or to be used as a weapon."
  },
  {
   "__typename": "MediaTag",
   "id": 113,
   "name": "Nekomimi",
   "category": "Cast-Traits",
   "description": "Humanoid characters with cat-like features such as cat ears and a tail."
  },
  {
   "__typename": "MediaTag",
   "id": 124,
   "name": "Netorare",
   "category": "Sexual Content",
   "description": "Netorare is what happens when the protagonist gets their partner stolen from them by someone else. It is a sexual fetish designed to cause sexual jealousy by way of having the partner indulge in sexual activity with someone other than the protagonist."
  },
  {
   "__typename": "MediaTag",
   "id": 280,
   "name": "Netorase",
   "category": "Sexual Content",
   "description": "Features characters in a romantic relationship who agree to be sexually intimate with others."
  },
  {
   "__typename": "MediaTag",
   "id": 316,
   "name": "Netori",
   "category": "Sexual Content",
   "description": "Features a character shown being intimate with the partner of another character. The opposite of netorare."
  },
  {
   "__typename": "MediaTag",
   "id": 255,
   "name": "Ninja",
   "category": "Cast-Traits",
   "description": "Prominently features Japanese warriors traditionally trained in espionage, sabotage and assasination."
  },
  {
   "__typename": "MediaTag",
   "id": 341,
   "name": "No Dialogue",
   "category": "Technical",
   "description": "This work contains no dialogue."
  },
  {
   "__typename": "MediaTag",
   "id": 327,
   "name": "Noir",
   "category": "Theme-Other",
   "description": "Stylized as a cynical crime drama with low-key visuals."
  },
  {
   "__typename": "MediaTag",
   "id": 1337,
   "name": "Non-fiction",
   "category": "Technical",
   "description": "A work that provides information regarding a real world topic and does not focus on an imaginary narrative."
  },
  {
   "__typename": "MediaTag",
   "id": 100,
   "name": "Nudity",
   "category": "Cast-Traits",
   "description": "Features a character wearing no clothing or exposing intimate body parts."
  },
  {
   "__typename": "MediaTag",
   "id": 614,
   "name": "Nun",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a nun."
  },
  {
   "__typename": "MediaTag",
   "id": 1571,
   "name": "Office",
   "category": "Setting-Scene",
   "description": "Features people who work in a business office."
  },
  {
   "__typename": "MediaTag",
   "id": 653,
   "name": "Office Lady",
   "category": "Cast-Traits",
   "description": "Prominently features a female office worker or OL."
  },
  {
   "__typename": "MediaTag",
   "id": 593,
   "name": "Oiran",
   "category": "Cast-Traits",
   "description": "Prominently features a courtesan character of the Japanese Edo Period."
  },
  {
   "__typename": "MediaTag",
   "id": 780,
   "name": "Ojou-sama",
   "category": "Cast-Traits",
   "description": "Features a wealthy, high-class, oftentimes stuck up and demanding female character."
  },
  {
   "__typename": "MediaTag",
   "id": 533,
   "name": "Omegaverse",
   "category": "Setting-Universe",
   "description": "Alternative universe that prominently features dynamics modeled after wolves in which there are alphas, betas, and omegas and heat cycles as well as impregnation, regardless of gender."
  },
  {
   "__typename": "MediaTag",
   "id": 1382,
   "name": "Orphan",
   "category": "Cast-Traits",
   "description": "Prominently features a character that is an orphan."
  },
  {
   "__typename": "MediaTag",
   "id": 97,
   "name": "Otaku Culture",
   "category": "Theme-Other",
   "description": "Centers around the culture of a fanatical fan-base."
  },
  {
   "__typename": "MediaTag",
   "id": 262,
   "name": "Outdoor",
   "category": "Setting-Scene",
   "description": "Centers around hiking, camping or other outdoor activities."
  },
  {
   "__typename": "MediaTag",
   "id": 874,
   "name": "Pandemic",
   "category": "Theme-Other",
   "description": "Prominently features a disease prevalent over a whole country or the world."
  },
  {
   "__typename": "MediaTag",
   "id": 1645,
   "name": "Parenthood",
   "category": "Theme-Slice of Life",
   "description": "Centers around the experience of raising a child."
  },
  {
   "__typename": "MediaTag",
   "id": 949,
   "name": "Parkour",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of parkour."
  },
  {
   "__typename": "MediaTag",
   "id": 39,
   "name": "Parody",
   "category": "Theme-Comedy",
   "description": "Features deliberate exaggeration of popular tropes or a particular genre to comedic effect."
  },
  {
   "__typename": "MediaTag",
   "id": 1515,
   "name": "Pet Play",
   "category": "Sexual Content",
   "description": "Treating a participant as though they were a pet animal. Often involves a collar and possibly BDSM."
  },
  {
   "__typename": "MediaTag",
   "id": 391,
   "name": "Philosophy",
   "category": "Theme-Other",
   "description": "Relating or devoted to the study of the fundamental nature of knowledge, reality, and existence."
  },
  {
   "__typename": "MediaTag",
   "id": 195,
   "name": "Photography",
   "category": "Theme-Arts",
   "description": "Centers around the use of cameras to capture photos."
  },
  {
   "__typename": "MediaTag",
   "id": 201,
   "name": "Pirates",
   "category": "Cast-Traits",
   "description": "Prominently features sea-faring adventurers branded as criminals by the law."
  },
  {
   "__typename": "MediaTag",
   "id": 183,
   "name": "Poker",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centers around the game of poker or its variations."
  },
  {
   "__typename": "MediaTag",
   "id": 40,
   "name": "Police",
   "category": "Theme-Other-Organisations",
   "description": "Centers around the life and activities of law enforcement officers."
  },
  {
   "__typename": "MediaTag",
   "id": 103,
   "name": "Politics",
   "category": "Theme-Other",
   "description": "Centers around politics, politicians, or government activities."
  },
  {
   "__typename": "MediaTag",
   "id": 1459,
   "name": "Polyamorous",
   "category": "Theme-Romance",
   "description": "Features a character who is in a consenting relationship with multiple people at one time."
  },
  {
   "__typename": "MediaTag",
   "id": 93,
   "name": "Post-Apocalyptic",
   "category": "Setting-Universe",
   "description": "Partly or completely set in a world or civilization after a global disaster."
  },
  {
   "__typename": "MediaTag",
   "id": 215,
   "name": "POV",
   "category": "Technical",
   "description": "Point of View; features scenes shown from the perspective of the series protagonist."
  },
  {
   "__typename": "MediaTag",
   "id": 397,
   "name": "Pregnant",
   "category": "Sexual Content",
   "description": "Features pregnant female characters in a sexual context."
  },
  {
   "__typename": "MediaTag",
   "id": 109,
   "name": "Primarily Adult Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed of characters above a high school age."
  },
  {
   "__typename": "MediaTag",
   "id": 1601,
   "name": "Primarily Animal Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed animal or animal-like characters."
  },
  {
   "__typename": "MediaTag",
   "id": 446,
   "name": "Primarily Child Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed of characters below a high school age."
  },
  {
   "__typename": "MediaTag",
   "id": 86,
   "name": "Primarily Female Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed of female characters."
  },
  {
   "__typename": "MediaTag",
   "id": 88,
   "name": "Primarily Male Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed of male characters."
  },
  {
   "__typename": "MediaTag",
   "id": 1228,
   "name": "Primarily Teen Cast",
   "category": "Cast-Main Cast",
   "description": "Main cast is mostly composed of teen characters."
  },
  {
   "__typename": "MediaTag",
   "id": 1427,
   "name": "Prison",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a prison."
  },
  {
   "__typename": "MediaTag",
   "id": 190,
   "name": "Prostitution",
   "category": "Sexual Content",
   "description": "Features characters who are paid for sexual favors."
  },
  {
   "__typename": "MediaTag",
   "id": 1490,
   "name": "Proxy Battle",
   "category": "Theme-Other",
   "description": "A proxy battle is a battle where humans use creatures/robots to do the fighting for them, either by commanding those creatures/robots or by simply evolving them/changing them into battle mode."
  },
  {
   "__typename": "MediaTag",
   "id": 1670,
   "name": "Psychosexual",
   "category": "Theme-Other",
   "description": "Work that involves the psychological aspects of sexual impulses."
  },
  {
   "__typename": "MediaTag",
   "id": 127,
   "name": "Public Sex",
   "category": "Sexual Content",
   "description": "Features sexual acts performed in public settings."
  },
  {
   "__typename": "MediaTag",
   "id": 325,
   "name": "Puppetry",
   "category": "Technical",
   "description": "Animation style involving the manipulation of puppets to act out scenes."
  },
  {
   "__typename": "MediaTag",
   "id": 481,
   "name": "Rakugo",
   "category": "Theme-Arts",
   "description": "Rakugo is the traditional Japanese performance art of comic storytelling."
  },
  {
   "__typename": "MediaTag",
   "id": 155,
   "name": "Rape",
   "category": "Sexual Content",
   "description": "Features non-consensual sexual penetration."
  },
  {
   "__typename": "MediaTag",
   "id": 160,
   "name": "Real Robot",
   "category": "Theme-Sci-Fi-Mecha",
   "description": "Prominently features mechanical designs loosely influenced by real-world robotics."
  },
  {
   "__typename": "MediaTag",
   "id": 311,
   "name": "Rehabilitation",
   "category": "Theme-Drama",
   "description": "Prominently features the recovery of a character who became incapable of social life or work."
  },
  {
   "__typename": "MediaTag",
   "id": 243,
   "name": "Reincarnation",
   "category": "Theme-Other",
   "description": "Features a character being born again after death, typically as another person or in another world."
  },
  {
   "__typename": "MediaTag",
   "id": 1091,
   "name": "Religion",
   "category": "Theme-Other",
   "description": "Centers on the belief that humanity is related to supernatural, transcendental, and spiritual elements."
  },
  {
   "__typename": "MediaTag",
   "id": 1647,
   "name": "Restaurant",
   "category": "Setting-Scene",
   "description": "Features a business that prepares and serves food and drinks to customers. Also encompasses cafes and bistros."
  },
  {
   "__typename": "MediaTag",
   "id": 252,
   "name": "Revenge",
   "category": "Theme-Drama",
   "description": "Prominently features a character who aims to exact punishment in a resentful or vindictive manner."
  },
  {
   "__typename": "MediaTag",
   "id": 845,
   "name": "Rimjob",
   "category": "Sexual Content",
   "description": "Features oral sex performed on the anus."
  },
  {
   "__typename": "MediaTag",
   "id": 175,
   "name": "Robots",
   "category": "Cast-Traits",
   "description": "Prominently features humanoid machines."
  },
  {
   "__typename": "MediaTag",
   "id": 1674,
   "name": "Rock Music",
   "category": "Theme-Arts-Music",
   "description": "Centers on the musical style of rock, not to be applied to anime that use rock in its soundtrack."
  },
  {
   "__typename": "MediaTag",
   "id": 683,
   "name": "Rotoscoping",
   "category": "Technical",
   "description": "Animation technique that animators use to trace over motion picture footage, frame by frame, to produce realistic action."
  },
  {
   "__typename": "MediaTag",
   "id": 1327,
   "name": "Royal Affairs",
   "category": "Theme-Other",
   "description": "Features nobility, alliances, arranged marriage, succession disputes, religious orders and other elements of royal politics."
  },
  {
   "__typename": "MediaTag",
   "id": 221,
   "name": "Rugby",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of rugby."
  },
  {
   "__typename": "MediaTag",
   "id": 250,
   "name": "Rural",
   "category": "Setting-Scene",
   "description": "Partly or completely set in the countryside."
  },
  {
   "__typename": "MediaTag",
   "id": 723,
   "name": "Sadism",
   "category": "Sexual Content",
   "description": "Prominently features characters deriving pleasure, especially sexual gratification, from inflicting pain, suffering, or humiliation on others."
  },
  {
   "__typename": "MediaTag",
   "id": 291,
   "name": "Samurai",
   "category": "Cast-Traits",
   "description": "Prominently features warriors of medieval Japanese nobility bound by a code of honor."
  },
  {
   "__typename": "MediaTag",
   "id": 80,
   "name": "Satire",
   "category": "Theme-Comedy",
   "description": "Prominently features the use of comedy or ridicule to expose and criticise social phenomena."
  },
  {
   "__typename": "MediaTag",
   "id": 387,
   "name": "Scat",
   "category": "Sexual Content",
   "description": "Lots of feces."
  },
  {
   "__typename": "MediaTag",
   "id": 46,
   "name": "School",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a primary or secondary educational institution."
  },
  {
   "__typename": "MediaTag",
   "id": 84,
   "name": "School Club",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a school club scene."
  },
  {
   "__typename": "MediaTag",
   "id": 1039,
   "name": "Scissoring",
   "category": "Sexual Content",
   "description": "A form of sexual activity between women in which the genitals are stimulated by being rubbed against one another."
  },
  {
   "__typename": "MediaTag",
   "id": 811,
   "name": "Scuba Diving",
   "category": "Theme-Game-Sport",
   "description": "Prominently features characters diving with the aid of special breathing equipment."
  },
  {
   "__typename": "MediaTag",
   "id": 50,
   "name": "Seinen",
   "category": "Demographic",
   "description": "Target demographic is adult males."
  },
  {
   "__typename": "MediaTag",
   "id": 133,
   "name": "Sex Toys",
   "category": "Sexual Content",
   "description": "Features objects that are designed to stimulate sexual pleasure."
  },
  {
   "__typename": "MediaTag",
   "id": 772,
   "name": "Shapeshifting",
   "category": "Theme-Fantasy",
   "description": "Features character(s) who changes one's appearance or form."
  },
  {
   "__typename": "MediaTag",
   "id": 305,
   "name": "Ships",
   "category": "Theme-Other-Vehicle",
   "description": "Prominently features the use of sea-based transportation vessels."
  },
  {
   "__typename": "MediaTag",
   "id": 121,
   "name": "Shogi",
   "category": "Theme-Game-Card & Board Game",
   "description": "Centers around the game of shogi."
  },
  {
   "__typename": "MediaTag",
   "id": 53,
   "name": "Shoujo",
   "category": "Demographic",
   "description": "Target demographic is teenage and young adult females."
  },
  {
   "__typename": "MediaTag",
   "id": 56,
   "name": "Shounen",
   "category": "Demographic",
   "description": "Target demographic is teenage and young adult males."
  },
  {
   "__typename": "MediaTag",
   "id": 468,
   "name": "Shrine Maiden",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a shrine maiden."
  },
  {
   "__typename": "MediaTag",
   "id": 809,
   "name": "Skateboarding",
   "category": "Theme-Game-Sport",
   "description": "Centers around or prominently features skateboarding as a sport."
  },
  {
   "__typename": "MediaTag",
   "id": 499,
   "name": "Skeleton",
   "category": "Cast-Traits",
   "description": "Prominently features skeleton(s) as a character."
  },
  {
   "__typename": "MediaTag",
   "id": 83,
   "name": "Slapstick",
   "category": "Theme-Comedy",
   "description": "Prominently features comedy based on deliberately clumsy actions or embarrassing events."
  },
  {
   "__typename": "MediaTag",
   "id": 247,
   "name": "Slavery",
   "category": "Theme-Other",
   "description": "Prominently features slaves, slavery, or slave trade."
  },
  {
   "__typename": "MediaTag",
   "id": 1616,
   "name": "Snowscape",
   "category": "Setting-Scene",
   "description": "Prominently or partially set in a snowy environment."
  },
  {
   "__typename": "MediaTag",
   "id": 386,
   "name": "Software Development",
   "category": "Theme-Other",
   "description": "Centers around characters developing or programming a piece of technology, software, gaming, etc."
  },
  {
   "__typename": "MediaTag",
   "id": 63,
   "name": "Space",
   "category": "Setting-Universe",
   "description": "Partly or completely set in outer space."
  },
  {
   "__typename": "MediaTag",
   "id": 162,
   "name": "Space Opera",
   "category": "Theme-Sci-Fi",
   "description": "Centers around space warfare, advanced technology, chivalric romance and adventure."
  },
  {
   "__typename": "MediaTag",
   "id": 1292,
   "name": "Spearplay",
   "category": "Theme-Action",
   "description": "Prominently features the use of spears in combat."
  },
  {
   "__typename": "MediaTag",
   "id": 1235,
   "name": "Squirting",
   "category": "Sexual Content",
   "description": "Female ejaculation; features the expulsion of liquid from the female genitalia."
  },
  {
   "__typename": "MediaTag",
   "id": 95,
   "name": "Steampunk",
   "category": "Theme-Fantasy",
   "description": "Prominently features technology and designs inspired by 19th-century industrial steam-powered machinery."
  },
  {
   "__typename": "MediaTag",
   "id": 323,
   "name": "Stop Motion",
   "category": "Technical",
   "description": "Animation style characterized by physical objects being moved incrementally between frames to create the illusion of movement."
  },
  {
   "__typename": "MediaTag",
   "id": 665,
   "name": "Succubus",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a succubus, a creature in medieval folklore that typically uses their sexual prowess to trap and seduce people to feed off them."
  },
  {
   "__typename": "MediaTag",
   "id": 1046,
   "name": "Suicide",
   "category": "Theme-Drama",
   "description": "The act or an instance of taking or attempting to take one's own life voluntarily and intentionally."
  },
  {
   "__typename": "MediaTag",
   "id": 360,
   "name": "Sumata",
   "category": "Sexual Content",
   "description": "Pussyjob; features the stimulation of male genitalia by the thighs and labia majora of a female character."
  },
  {
   "__typename": "MediaTag",
   "id": 1080,
   "name": "Sumo",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of sumo."
  },
  {
   "__typename": "MediaTag",
   "id": 66,
   "name": "Super Power",
   "category": "Theme-Fantasy",
   "description": "Prominently features characters with special abilities that allow them to do what would normally be physically or logically impossible."
  },
  {
   "__typename": "MediaTag",
   "id": 159,
   "name": "Super Robot",
   "category": "Theme-Sci-Fi-Mecha",
   "description": "Prominently features large robots often piloted by hot-blooded protagonists."
  },
  {
   "__typename": "MediaTag",
   "id": 172,
   "name": "Superhero",
   "category": "Theme-Fantasy",
   "description": "Prominently features super-powered humans who aim to serve the greater good."
  },
  {
   "__typename": "MediaTag",
   "id": 678,
   "name": "Surfing",
   "category": "Theme-Game-Sport",
   "description": "Centers around surfing as a sport."
  },
  {
   "__typename": "MediaTag",
   "id": 281,
   "name": "Surreal Comedy",
   "category": "Theme-Comedy",
   "description": "Prominently features comedic moments that defy casual reasoning, resulting in illogical events."
  },
  {
   "__typename": "MediaTag",
   "id": 143,
   "name": "Survival",
   "category": "Theme-Other",
   "description": "Centers around the struggle to live in spite of extreme obstacles."
  },
  {
   "__typename": "MediaTag",
   "id": 630,
   "name": "Sweat",
   "category": "Sexual Content",
   "description": "Lots of sweat."
  },
  {
   "__typename": "MediaTag",
   "id": 150,
   "name": "Swimming",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of swimming."
  },
  {
   "__typename": "MediaTag",
   "id": 43,
   "name": "Swordplay",
   "category": "Theme-Action",
   "description": "Prominently features the use of swords in combat."
  },
  {
   "__typename": "MediaTag",
   "id": 120,
   "name": "Table Tennis",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of table tennis (also known as \"ping pong\")."
  },
  {
   "__typename": "MediaTag",
   "id": 174,
   "name": "Tanks",
   "category": "Theme-Other-Vehicle",
   "description": "Prominently features the use of tanks or other armoured vehicles."
  },
  {
   "__typename": "MediaTag",
   "id": 335,
   "name": "Tanned Skin",
   "category": "Cast-Traits",
   "description": "Prominently features characters with tanned skin."
  },
  {
   "__typename": "MediaTag",
   "id": 165,
   "name": "Teacher",
   "category": "Cast-Traits",
   "description": "Protagonist is an educator, usually in a school setting."
  },
  {
   "__typename": "MediaTag",
   "id": 649,
   "name": "Teens' Love",
   "category": "Theme-Romance",
   "description": "Sexually explicit love-story between individuals of the opposite sex, specifically targeting females of teens and young adult age."
  },
  {
   "__typename": "MediaTag",
   "id": 194,
   "name": "Tennis",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of tennis."
  },
  {
   "__typename": "MediaTag",
   "id": 189,
   "name": "Tentacles",
   "category": "Sexual Content",
   "description": "Features the long appendages most commonly associated with octopuses or squid, often sexually penetrating a character."
  },
  {
   "__typename": "MediaTag",
   "id": 285,
   "name": "Terrorism",
   "category": "Theme-Other",
   "description": "Centers around the activities of a terrorist or terrorist organization."
  },
  {
   "__typename": "MediaTag",
   "id": 132,
   "name": "Threesome",
   "category": "Sexual Content",
   "description": "Features sexual acts between three people."
  },
  {
   "__typename": "MediaTag",
   "id": 1596,
   "name": "Time Loop",
   "category": "Theme-Sci-Fi",
   "description": "A character is stuck in a repetitive cycle that they are attempting to break out of. This is distinct from a manipulating time of their own choice."
  },
  {
   "__typename": "MediaTag",
   "id": 96,
   "name": "Time Manipulation",
   "category": "Theme-Sci-Fi",
   "description": "Prominently features time-traveling or other time-warping phenomena."
  },
  {
   "__typename": "MediaTag",
   "id": 153,
   "name": "Time Skip",
   "category": "Setting-Time",
   "description": "Features a gap in time used to advance the story."
  },
  {
   "__typename": "MediaTag",
   "id": 513,
   "name": "Tokusatsu",
   "category": "Theme-Sci-Fi",
   "description": "Prominently features elements that resemble special effects in Japanese live-action shows"
  },
  {
   "__typename": "MediaTag",
   "id": 931,
   "name": "Tomboy",
   "category": "Cast-Traits",
   "description": "Features a girl who exhibits characteristics or behaviors considered in many cultures to be typical of boys."
  },
  {
   "__typename": "MediaTag",
   "id": 1121,
   "name": "Torture",
   "category": "Theme-Other",
   "description": "The act of deliberately inflicting severe pain or suffering upon another individual or oneself as a punishment or with a specific purpose."
  },
  {
   "__typename": "MediaTag",
   "id": 85,
   "name": "Tragedy",
   "category": "Theme-Drama",
   "description": "Centers around tragic events and unhappy endings."
  },
  {
   "__typename": "MediaTag",
   "id": 122,
   "name": "Trains",
   "category": "Theme-Other-Vehicle",
   "description": "Prominently features trains."
  },
  {
   "__typename": "MediaTag",
   "id": 1165,
   "name": "Transgender",
   "category": "Cast-Traits",
   "description": "Features a character whose gender identity differs from the sex they were assigned at birth."
  },
  {
   "__typename": "MediaTag",
   "id": 1310,
   "name": "Travel",
   "category": "Theme-Other",
   "description": "Centers around character(s) moving between places a significant distance apart."
  },
  {
   "__typename": "MediaTag",
   "id": 214,
   "name": "Triads",
   "category": "Theme-Other-Organisations",
   "description": "Centered around Chinese organised crime syndicates."
  },
  {
   "__typename": "MediaTag",
   "id": 164,
   "name": "Tsundere",
   "category": "Cast-Traits",
   "description": "Prominently features a character who acts cold and hostile in order to mask warmer emotions."
  },
  {
   "__typename": "MediaTag",
   "id": 494,
   "name": "Twins",
   "category": "Cast-Traits",
   "description": "Prominently features two or more siblings that were born at one birth."
  },
  {
   "__typename": "MediaTag",
   "id": 1539,
   "name": "Unrequited Love",
   "category": "Theme-Romance",
   "description": "One or more characters are experiencing an unrequited love that may or may not be reciprocated."
  },
  {
   "__typename": "MediaTag",
   "id": 595,
   "name": "Urban",
   "category": "Setting-Scene",
   "description": "Partly or completely set in a city."
  },
  {
   "__typename": "MediaTag",
   "id": 321,
   "name": "Urban Fantasy",
   "category": "Setting-Universe",
   "description": "Set in a world similar to the real world, but with the existence of magic or other supernatural elements."
  },
  {
   "__typename": "MediaTag",
   "id": 74,
   "name": "Vampire",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a vampire."
  },
  {
   "__typename": "MediaTag",
   "id": 1574,
   "name": "Veterinarian",
   "category": "Cast-Traits",
   "description": "Prominently features a veterinarian or one of the main characters is a veterinarian."
  },
  {
   "__typename": "MediaTag",
   "id": 308,
   "name": "Video Games",
   "category": "Theme-Game",
   "description": "Centers around characters playing video games."
  },
  {
   "__typename": "MediaTag",
   "id": 618,
   "name": "Vikings",
   "category": "Cast-Traits",
   "description": "Prominently features Scandinavian seafaring pirates and warriors."
  },
  {
   "__typename": "MediaTag",
   "id": 857,
   "name": "Villainess",
   "category": "Cast-Traits",
   "description": "Centers around or prominently features a villainous noble lady."
  },
  {
   "__typename": "MediaTag",
   "id": 380,
   "name": "Virginity",
   "category": "Sexual Content",
   "description": "Features a male character who has never had sexual relations (until now)."
  },
  {
   "__typename": "MediaTag",
   "id": 112,
   "name": "Virtual World",
   "category": "Setting-Universe",
   "description": "Partly or completely set in the world inside a video game."
  },
  {
   "__typename": "MediaTag",
   "id": 1690,
   "name": "Vocal synth",
   "category": "Theme-Other",
   "description": "Features one or more singers or characters that are products of a synthesized singing program. Popular examples are Vocaloids, Megpoids or UTAUloids.  "
  },
  {
   "__typename": "MediaTag",
   "id": 116,
   "name": "Volleyball",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of volleyball."
  },
  {
   "__typename": "MediaTag",
   "id": 624,
   "name": "Vore",
   "category": "Sexual Content",
   "description": "Features a character being swallowed or swallowing another creature whole."
  },
  {
   "__typename": "MediaTag",
   "id": 318,
   "name": "Voyeur",
   "category": "Sexual Content",
   "description": "Features a character who enjoys seeing the sex acts or sex organs of others."
  },
  {
   "__typename": "MediaTag",
   "id": 1047,
   "name": "VTuber",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is either an actual or fictive VTuber."
  },
  {
   "__typename": "MediaTag",
   "id": 111,
   "name": "War",
   "category": "Theme-Other",
   "description": "Partly or completely set during wartime."
  },
  {
   "__typename": "MediaTag",
   "id": 180,
   "name": "Watersports",
   "category": "Sexual Content",
   "description": "Features sexual situations involving urine."
  },
  {
   "__typename": "MediaTag",
   "id": 534,
   "name": "Werewolf",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a werewolf."
  },
  {
   "__typename": "MediaTag",
   "id": 179,
   "name": "Witch",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is a witch."
  },
  {
   "__typename": "MediaTag",
   "id": 145,
   "name": "Work",
   "category": "Setting-Scene",
   "description": "Centers around the activities of a certain occupation."
  },
  {
   "__typename": "MediaTag",
   "id": 231,
   "name": "Wrestling",
   "category": "Theme-Game-Sport",
   "description": "Centers around the sport of wrestling."
  },
  {
   "__typename": "MediaTag",
   "id": 394,
   "name": "Writing",
   "category": "Theme-Arts",
   "description": "Centers around the profession of writing books or novels."
  },
  {
   "__typename": "MediaTag",
   "id": 303,
   "name": "Wuxia",
   "category": "Theme-Fantasy",
   "description": "Chinese fiction concerning the adventures of martial artists in Ancient China."
  },
  {
   "__typename": "MediaTag",
   "id": 199,
   "name": "Yakuza",
   "category": "Theme-Other-Organisations",
   "description": "Centered around Japanese organised crime syndicates."
  },
  {
   "__typename": "MediaTag",
   "id": 163,
   "name": "Yandere",
   "category": "Cast-Traits",
   "description": "Prominently features a character who is obsessively in love with another, to the point of acting deranged or violent."
  },
  {
   "__typename": "MediaTag",
   "id": 233,
   "name": "Youkai",
   "category": "Theme-Fantasy",
   "description": "Prominently features supernatural creatures from Japanese folklore."
  },
  {
   "__typename": "MediaTag",
   "id": 76,
   "name": "Yuri",
   "category": "Theme-Romance",
   "description": "Prominently features romance between two females, not inherently sexual. Also known as Girls' Love."
  },
  {
   "__typename": "MediaTag",
   "id": 152,
   "name": "Zombie",
   "category": "Cast-Traits",
   "description": "Prominently features reanimated corpses which often prey on live humans and turn them into zombies."
  },
  {
   "__typename": "MediaTag",
   "id": 1446,
   "name": "Zoophilia",
   "category": "Sexual Content",
   "description": "Features a character who has a sexual attraction for non-human animals."
  }
 ],
 year: YEAR_RANGE_OBJ,
 season: [
  {
   id: 1,
   name: "Winter"
  },
  {
   id: 2,
   name: "Spring"
  },
  {
   id: 3,
   name: "Summer"
  },
  {
   id: 4,
   name: "Fall"
  }
 ],
 format: [
  {
   id: 1,
   name: "TV Show"
  },
  {
   id: 2,
   name: "Movie"
  },
  {
   id: 3,
   name: "TV Short"
  },
  {
   id: 4,
   name: "Special"
  },
  {
   id: 5,
   name: "OVA"
  },
  {
   id: 6,
   name: "ONA"
  },
  {
   id: 7,
   name: "Music"
  },
 ],
 sort: [
  { id: 1, name: "Title" },
  { id: 2, name: "Popularity" },
  { id: 3, name: "Average Score" },
  { id: 4, name: "Trending" },
  { id: 5, name: "Favourites" },
  { id: 6, name: "Date Added" },
  { id: 7, name: "Release Date" }
 ],
 airingStatus: [
  { id: 1, name: "Airing" },
  { id: 2, name: "Finished" },
  { id: 3, name: "Not Yet Aired" },
  { id: 4, name: "Cancelled" }
 ],
 streamingOn: [
  {
   id: 1,
   name: "Crunchyroll"
  },
  {
   id: 2,
   name: "Hulu"
  },
  {
   id: 3,
   name: "Netflix"
  },
  {
   id: 4,
   name: "Youtube"
  },
  {
   id: 5,
   name: "HIDIVE"
  },
  {
   id: 6,
   name: "Amazon Prime Video"
  },
  {
   id: 7,
   name: "Vimeo"
  },
  {
   id: 8,
   name: "RetroCrush"
  },
  {
   id: 9,
   name: "Adult Swim"
  },
  {
   id: 10,
   name: "Japanese Film Archives"
  },
  {
   id: 11,
   name: "Tubi TV"
  },
  {
   id: 12,
   name: "Crackie"
  },
  {
   id: 13,
   name: "AsianCrush"
  },
  {
   id: 14,
   name: "Midnight Pulp"
  },
  {
   id: 15,
   name: "Bilibili"
  },
  {
   id: 16,
   name: "Disney Plus"
  },
  {
   id: 17,
   name: "Bilibili TV"
  },
  {
   id: 18,
   name: "Tencent Video"
  },
  {
   id: 19,
   name: "iQ"
  },
  {
   id: 20,
   name: "Youku"
  },
  {
   id: 21,
   name: "WeTV"
  },
  {
   id: 22,
   name: "Niconico Video"
  },
  {
   id: 23,
   name: "iQIYI"
  },
  {
   id: 24,
   name: "Star+"
  },
  {
   id: 25,
   name: "Max"
  },
  {
   id: 26,
   name: "Viki"
  },
  {
   id: 27,
   name: "Cineverse"
  },
  {
   id: 28,
   name: "Youku TV"
  },
  {
   id: 29,
   name: "Coolmic"
  },
  {
   id: 30,
   name: "Criterion Channel"
  },
  {
   id: 31,
   name: "Hoopla"
  },
  {
   id: 32,
   name: "Laftel"
  },
 ],
 countryOfOrigin: [
  { id: 1, name: "Japan" },
  { id: 2, name: "South Korea" },
  { id: 3, name: "China" },
  { id: 4, name: "Taiwan" },
 ],
 sourceMaterial: [
  { id: 1, name: "Original" },
  { id: 2, name: "Manga" },
  { id: 3, name: "Light Novel" },
  { id: 4, name: "Web Novel" },
  { id: 5, name: "Novel" },
  { id: 6, name: "Anime" },
  { id: 7, name: "Visual Novel" },
  { id: 8, name: "Video Game" },
  { id: 9, name: "Doujinshi" },
  { id: 10, name: "Comic" },
  { id: 11, name: "Live Action" },
  { id: 12, name: "Game" },
  { id: 13, name: "Multimedia Project" },
  { id: 14, name: "Picture Book" },
  { id: 15, name: "Other" },
 ],
 publishingStatus: [
  {
   id: 1,
   name: 'Releasing'
  },
  {
   id: 2,
   name: 'Finished'
  },
  {
   id: 3,
   name: 'Not Yet Released'
  },
  {
   id: 4,
   name: 'Hiatus'
  },
  {
   id: 5,
   name: 'Cancelled'
  },
 ],
 english: [
  {
   id: 1,
   name: 'Manga Club'
  },
  {
   id: 2,
   name: 'Fakku'
  },
  {
   id: 3,
   name: 'WebComics'
  },
  {
   id: 4,
   name: 'MANGA Plus'
  },
  {
   id: 5,
   name: 'Webtoons'
  },
  {
   id: 6,
   name: 'Toomics'
  },
  {
   id: 7,
   name: 'Lezhin'
  },
  {
   id: 8,
   name: 'Futekiya'
  },
  {
   id: 9,
   name: 'Manga Planet'
  },
  {
   id: 10,
   name: 'Tapas'
  },
  {
   id: 11,
   name: 'Tappytoon'
  },
  {
   id: 12,
   name: 'Manta'
  },
  {
   id: 13,
   name: 'WeComics'
  },
  {
   id: 14,
   name: 'Webnovel'
  },
  {
   id: 15,
   name: 'Copin Comic'
  },
  {
   id: 16,
   name: 'MangaToon'
  },
  {
   id: 17,
   name: 'J-Novel Club'
  },
  {
   id: 18,
   name: 'Bilibili Comics'
  },
  {
   id: 19,
   name: 'Lalatoon'
  },
  {
   id: 20,
   name: 'DAYcomics'
  },
  {
   id: 21,
   name: 'MangaPlaza'
  },
  {
   id: 22,
   name: 'Viz'
  },
  {
   id: 23,
   name: 'Azuki'
  },
  {
   id: 24,
   name: 'Pocket Comics'
  },
  {
   id: 25,
   name: 'Comikey'
  },
  {
   id: 26,
   name: 'INKR'
  },
  {
   id: 27,
   name: 'Alpha Manga'
  },
  {
   id: 28,
   name: 'Pixiv'
  },
  {
   id: 29,
   name: 'Coolmic'
  },
  {
   id: 30,
   name: 'Lezhin X'
  },
  {
   id: 31,
   name: 'Toomics'
  },
  {
   id: 32,
   name: 'Manga UP!'
  },
  {
   id: 33,
   name: 'Netcomics'
  },
  {
   id: 34,
   name: 'Irodori Comics'
  },
  {
   id: 35,
   name: 'K Manga'
  },
  {
   id: 36,
   name: 'Doujin'
  }
 ],
 korean: [
  {
   id: 1,
   name: 'Lezhin'
  },
  {
   id: 2,
   name: 'Justoon'
  },
  {
   id: 3,
   name: 'Naver Webtoon'
  },
  {
   id: 4,
   name: 'KakaoPage'
  },
  {
   id: 5,
   name: 'Bomtoon'
  },
  {
   id: 6,
   name: 'Peanutoon'
  },
  {
   id: 7,
   name: 'Comico'
  },
  {
   id: 8,
   name: 'Comica'
  },
  {
   id: 9,
   name: 'Bufftoon'
  },
  {
   id: 10,
   name: 'Never Series'
  },
  {
   id: 11,
   name: 'TOPTOON'
  },
  {
   id: 12,
   name: 'Kakao Webtoon'
  },
  {
   id: 13,
   name: 'Manyeo Comics'
  },
  {
   id: 14,
   name: 'Anytoon'
  },
  {
   id: 15,
   name: 'Mootoon'
  },
  {
   id: 16,
   name: 'Ktoon'
  },
  {
   id: 17,
   name: 'Bufftoon'
  },
  {
   id: 18,
   name: 'Onestory'
  },
  {
   id: 19,
   name: 'Battle Comics'
  },
  {
   id: 20,
   name: 'Spooncomics'
  },
  {
   id: 21,
   name: 'Qtoon'
  },
  {
   id: 22,
   name: 'Manhwakyung'
  },
 ],
 japanese: [
  {
   id: 1,
   name: 'Mangabox'
  },
  {
   id: 2,
   name: 'ComicWalker'
  },
  {
   id: 3,
   name: 'Nico Nico Seiga'
  },
  {
   id: 4,
   name: 'Pixiv Comic'
  },
  {
   id: 5,
   name: 'Pixiv Novel'
  },
  {
   id: 6,
   name: 'Comico'
  },
  {
   id: 7,
   name: 'Piccoma'
  },
  {
   id: 8,
   name: 'Webtoons'
  },
  {
   id: 9,
   name: 'Shonen Jump Plus'
  },
  {
   id: 10,
   name: 'Pocket Magazine'
  },
  {
   id: 11,
   name: 'Sunday Webry'
  },
  {
   id: 12,
   name: 'Ganma!'
  },
  {
   id: 13,
   name: 'Cycomics'
  },
  {
   id: 14,
   name: 'Tonari no Young Jump'
  },
  {
   id: 15,
   name: 'Manga Park'
  },
  {
   id: 16,
   name: 'Comic Days'
  },
  {
   id: 17,
   name: 'Comic Zenon'
  },
  {
   id: 18,
   name: 'Manga Library Z'
  },
  {
   id: 19,
   name: 'Manga Love'
  },
  {
   id: 20,
   name: 'Sukima'
  },
  {
   id: 21,
   name: 'Comicess'
  },
  {
   id: 22,
   name: 'Manga Dokuha'
  },
  {
   id: 23,
   name: '?? lanjutkan'
  },
 ]
}

export const INPUT_FILTERS_PROPS = {
 year: {
  htmlFor: "year",
  filterTitle: "Year",
  filterCamelcase: "year",
  filterfor: "medium",
  typeofDropdown: "radio"
 },
 season: {
  htmlFor: "season",
  filterTitle: "Season",
  filterCamelcase: "season",
  filterfor: "medium",
  typeofDropdown: "radio"
 },
 format: {
  htmlFor: "format",
  filterTitle: "Format",
  filterCamelcase: "format",
  filterfor: "medium",
  typeofDropdown: "checkbox"
 },
 sort: {
  htmlFor: "sort",
  filterTitle: "Sort",
  filterCamelcase: "sort",
  filterfor: "medium",
  typeofDropdown: "radio"
 },
 airingStatus: {
  htmlFor: "airing-status",
  filterTitle: "Airing Status",
  filterCamelcase: "airingStatus",
  filterfor: "large",
  typeofDropdown: "radio"
 },
 streamingOn: {
  htmlFor: "streaming-on",
  filterTitle: "Streaming On",
  filterCamelcase: "streamingOn",
  filterfor: "large",
  typeofDropdown: "checkbox"
 },
 countryOfOrigin: {
  htmlFor: "country-of-oirigin",
  filterTitle: "Country Of Origin",
  filterCamelcase: "countryOfOrigin",
  filterfor: "large",
  typeofDropdown: "radio"
 },
 sourceMaterial: {
  htmlFor: "source-material",
  filterTitle: "Source Material",
  filterCamelcase: "sourceMaterial",
  filterfor: "large",
  typeofDropdown: "radio"
 },
 publishingStatus: {
  htmlFor: "publishing-status",
  filterTitle: "Publishing Status",
  filterCamelcase: "publishingStatus",
  filterfor: "medium",
  typeofDropdown: "radio"
 },
 readableOn: {
  htmlFor: "readable-on",
  filterTitle: "Readable On",
  filterCamelcase: "readableOn",
  filterfor: "large",
  typeofDropdown: "checkbox"
 },
}

export const SLIDERS_VALUES = {
 year: {
  min: MIN_YEAR,
  max: END_YEAR,
  defaulValue: [MIN_YEAR, END_YEAR]
 },
 episodes: {
  min: MIN_EPS,
  max: MAX_EPS,
  defaulValue: [MIN_EPS, MAX_EPS]
 },
 duration: {
  min: MIN_DUR,
  max: MAX_DUR,
  defaulValue: [MIN_DUR, MAX_DUR]
 },
 minimumTagPercentage: {
  min: MIN_TAG,
  max: MAX_TAG,
  defaultValue: 18,
 }
}