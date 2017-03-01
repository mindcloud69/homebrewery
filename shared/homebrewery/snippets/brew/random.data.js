const _ = require('lodash');

const Data = {
	rand : (name, max = 1, min = 1)=>{
		return _.sampleSize(Data[name], _.random(min, max));
	},

	titles : [
		`The Burning Gallows`,
		`The Ring of Nenlast`,
		`Below the Blind Tavern`,
		`Below the Hungering River`,
		`Before Bahamut's Land`,
		`The Cruel Grave from Within`,
		`The Strength of Trade Road`,
		`Through The Raven Queen's Worlds`,
		`Within the Settlement`,
		`The Crown from Within`,
		`The Merchant Within the Battlefield`,
		`Ioun's Fading Traveler`,
		`The Legion Ingredient`,
		`The Explorer Lure`,
		`Before the Charming Badlands`,
		`The Living Dead Above the Fearful Cage`,
		`Vecna's Hidden Sage`,
		`Bahamut's Demonspawn`,
		`Across Gruumsh's Elemental Chaos`,
		`The Blade of Orcus`,
		`Beyond Revenge`,
		`Brain of Insanity`,
		`Breed Battle!, A New Beginning`,
		`Evil Lake, A New Beginning`,
		`Invasion of the Gigantic Cat, Part II`,
		`Kraken War 2020`,
		`The Body Whisperers`,
		`The Diabolical Tales of the Ape-Women`,
		`The Doctor Immortal`,
		`The Doctor from Heaven`,
		`Azure Core`,
		`Core Battle`,
		`Core of Heaven: The Guardian of Amazement`,
		`Deadly Amazement III`,
		`Dry Chaos IX`,
		`Gate Thunder`,
		`Guardian: Skies of the Dark Wizard`,
		`Lute of Eternity`,
		`Mercury's Planet: Brave Evolution`,
		`Ruby of Atlantis: The Quake of Peace`,
		`Vyse's Skies`,
		`White Greatness III`,
		`Yellow Divinity`,
		`Zidane's Ghost`
	],

	subtitles : [
		`In an ominous universe, a botanist opposes terrorism.`,
		`In a demon-haunted city, in an age of lies and hate, a physicist tries to find an ancient treasure and battles a mob of aliens.`,
		`In a land of corruption, two cyberneticists and a dungeon delver search for freedom.`,
		`In an evil empire of horror, two rangers battle the forces of hell.`,
		`In a lost city, in an age of sorcery, a librarian quests for revenge.`,
		`In a universe of illusions and danger, three time travellers and an adventurer search for justice.`,
		`In a forgotten universe of barbarism, in an era of terror and mysticism, a virtual reality programmer and a spy try to find vengance and battle crime.`,
		`In a universe of demons, in an era of insanity and ghosts, three bodyguards and a bodyguard try to find vengance.`,
		`In a kingdom of corruption and battle, seven artificial intelligences try to save the last living fertile woman.`,
		`In a universe of virutal reality and agony, in an age of ghosts and ghosts, a fortune-teller and a wanderer try to avert the apocalypse.`,
		`In a crime-infested kingdom, three martial artists quest for the truth and oppose evil.`,
		`In a terrifying universe of lost souls, in an era of lost souls, eight dancers fight evil.`,
		`In a galaxy of confusion and insanity, three martial artists and a duke battle a mob of psychics.`,
		`In an amazing kingdom, a wizard and a secretary hope to prevent the destruction of mankind.`,
		`In a kingdom of deception, a reporter searches for fame.`,
		`In a hellish empire, a swordswoman and a duke try to find the ultimate weapon and battle a conspiracy.`,
		`In an evil galaxy of illusion, in a time of technology and misery, seven psychiatrists battle crime.`,
		`In a dark city of confusion, three swordswomen and a singer battle lawlessness.`,
		`In an ominous empire, in an age of hate, two philosophers and a student try to find justice and battle a mob of mages intent on stealing the souls of the innocent.`,
		`In a kingdom of panic, six adventurers oppose lawlessness.`,
		`In a land of dreams and hopelessness, three hackers and a cyborg search for justice.`,
		`On a planet of mysticism, three travelers and a fire fighter quest for the ultimate weapon and oppose evil.`,
		`In a wicked universe, five seers fight lawlessness.`,
		`In a kingdom of death, in an era of illusion and blood, four colonists search for fame.`,
		`In an amazing kingdom, in an age of sorcery and lost souls, eight space pirates quest for freedom.`,
		`In a cursed empire, five inventors oppose terrorism.`,
		`On a crime-ridden planet of conspiracy, a watchman and an artificial intelligence try to find love and oppose lawlessness.`,
		`In a forgotten land, a reporter and a spy try to stop the apocalypse.`,
		`In a forbidden land of prophecy, a scientist and an archivist oppose a cabal of barbarians intent on stealing the souls of the innocent.`,
		`On an infernal world of illusion, a grave robber and a watchman try to find revenge and combat a syndicate of mages intent on stealing the source of all magic.`,
		`In a galaxy of dark magic, four fighters seek freedom.`,
		`In an empire of deception, six tomb-robbers quest for the ultimate weapon and combat an army of raiders.`,
		`In a kingdom of corruption and lost souls, in an age of panic, eight planetologists oppose evil.`,
		`In a galaxy of misery and hopelessness, in a time of agony and pain, five planetologists search for vengance.`,
		`In a universe of technology and insanity, in a time of sorcery, a computer techician quests for hope.`,
		`On a planet of dark magic and barbarism, in an age of horror and blasphemy, seven librarians search for fame.`,
		`In an empire of dark magic, in a time of blood and illusions, four monks try to find the ultimate weapon and combat terrorism.`,
		`In a forgotten empire of dark magic, six kings try to prevent the destruction of mankind.`,
		`In a galaxy of dark magic and horror, in an age of hopelessness, four marines and an outlaw combat evil.`,
		`In a mysterious city of illusion, in an age of computerization, a witch-hunter tries to find the ultimate weapon and opposes an evil corporation.`,
		`In a damned kingdom of technology, a virtual reality programmer and a fighter seek fame.`,
		`In a hellish kingdom, in an age of blasphemy and blasphemy, an astrologer searches for fame.`,
		`In a damned world of devils, an alien and a ranger quest for love and oppose a syndicate of demons.`,
		`In a cursed galaxy, in a time of pain, seven librarians hope to avert the apocalypse.`,
		`In a crime-infested galaxy, in an era of hopelessness and panic, three champions and a grave robber try to solve the ultimate crime.`
	],

	classes : [
		'Archivist',
		'Armadillomaster',
		'Beat Priest',
		'Beer Mentalist',
		'Berserker-Typist',
		'Bonsai Hooligan',
		'Candy Finder',
		'Coffeemancer',
		'Concierge',
		'Corn Theif',
		'Cottonsmith',
		'Dirtmistress',
		'Fancyman',
		'Fishmongerer',
		'Fletcher',
		'Flow Robber',
		'Haberdasher',
		'Hamster Lady',
		'Jam Robber',
		'Linguist',
		'Lizard Trainer',
		'Manicurist',
		'Markermaster',
		'Mint Handler',
		'Narwhalologer',
		'Notary',
		'Otter Mentalist',
		'Plastic Diviner',
		'Rhymemancer',
		'Rum Buster',
		'Whaleologer',
	],


	gear : [
		`a squeegee`,
		'6 rubber chickens',
		'10 lint fluffs',
		'1 button',
		'a cherished lost sock',
		'a small doll',
		'hopes and dreams',
		'1st born child',
		'3rd born child',
		'a crushed button worth at least 1cp',
		'discarded gum wrapper',
		`Broch of Air Blasts`,
		`Elven Leather Armor`,
		`Glaive of the Deathly Viper`,
		`Mystical Eagle's Ointment of the Eagles`,
		`Mystical Scintillating Cudgel`,
		`Wise Thinker's Anklet`,
		`The four fragments of the Disk of Madness`
	],



	spellNames : [
		"Astral Rite of Acne",
		"Create Acne",
		"Cursed Ramen Erruption",
		"Dark Chant of the Dentists",
		"Erruption of Immaturity",
		"Flaming Disc of Inconvenience",
		"Heal Bad Hygene",
		"Heavenly Transfiguration of the Cream Devil",
		"Hellish Cage of Mucus",
		"Irritate Peanut Butter Fairy",
		"Luminous Erruption of Tea",
		"Mystic Spell of the Poser",
		"Sorcerous Enchantment of the Chimneysweep",
		"Steak Sauce Ray",
		"Talk to Groupie",
		"Astonishing Chant of Chocolate",
		"Astounding Pasta Puddle",
		"Ball of Annoyance",
		"Cage of Yarn",
		"Control Noodles Elemental",
		"Create Nervousness",
		"Cure Baldness",
		"Cursed Ritual of Bad Hair",
		"Dispell Piles in Dentist",
		"Eliminate Florists",
		"Illusionary Transfiguration of the Babysitter",
		"Necromantic Armor of Salad Dressing",
		"Occult Transfiguration of Foot Fetish",
		"Protection from Mucus Giant",
		"Tinsel Blast",
		"Alchemical Evocation of the Goths",
		"Call Fangirl",
		"Divine Spell of Crossdressing",
		"Dominate Ramen Giant",
		"Eliminate Vindictiveness in Gym Teacher",
		"Extra-Planar Spell of Irritation",
		"Induce Whining in Babysitter",
		"Invoke Complaining",
		"Magical Enchantment of Arrogance",
		"Occult Globe of Salad Dressing",
		"Overwhelming Enchantment of the Chocolate Fairy",
		"Sorcerous Dandruff Globe",
		"Spiritual Invocation of the Costumers",
		"Ultimate Rite of the Confetti Angel",
		"Ultimate Ritual of Mouthwash",

	],

	effects : [
		'Induces politicians to parade through the streets naked, and makes the nearest unbetrothed prince or princess dance around the maypole making dirty jokes.',
		'Tricks enchanted princesses to spin straw into gold, and makes princesses trapped in towers steal from the rich and give to the poor.',
		'Drives the man or woman of your dreams to jump up and down on the spot, and makes angry dragons grow onions wherever they walk.',
		'Causes enchanted talking animals to fall down dead, and makes large pumpkins attract love-struck unicorns.',
		'Induces officers of the law to adopt small, fluffy bunnies as pets, and makes enchanted wooden puppets vomit gold coins.',
		'Causes accountants to give you all of their possessions, and makes officers of the law grow mushrooms out of their ears.',
		'Induces goats to eat until they burst, and makes men with small heads vomit gold coins.',
		'Tricks enchanted princesses to turn into small pumpkins, and makes evil landlords declare themselves king.',
		'Induces your enemies to steal from the palace cook, and makes rich merchants propose marriage.',
		'Causes evil landlords to vomit gold coins, and makes the nearest unbetrothed prince or princess drink beer.',
		'Induces men with small heads to grow mushrooms out of their ears, and makes witches steal from the rich and give to the poor.',
		`Conjures food with energy equal to whatever was used to cast the spell.`,
		`Allows a living target to withstand extreme cold.`,
		`Conjures a thick fog that acts as a smoke screen.`,
		`Creates a bubble in which time is stopped for a short period.`,
		`Creates several bolts of shadowy energy.`,
		`Causes a living target to panic for a period of time.`,
		`Creates a floating scroll and quill that'll write down everything the caster or target says for a period of time.`,
		`Causes whoever is targeted to enter a state of confusion for a period of time.`,
		`Creates a magical barrier that blocks all with dark intentions or dark influences over them.`,
		`Creates a bolt of demonic energy.`,
		`Causes whoever is targeted to drop whatever they're holding.`
	],

	effects2 : [
		'Unless they pass a Constitution save, the creature gains 1 level of Exhaustion.',
		'Pushed 5 feet unless they pass a Strength save. ',
		'Unless they pass a Wisdom save, the creature is Charmed.',
		'Unless they pass a Wisdom save, the creature is Frightened. The creature can remake this save on each of their turns.',
		'Unless they pass a Wisdom save, the creature is Frightened. The creature can remake this save on each of their turns.',
		'Unless they pass a Wisdom save, the creature is Paralyzed. The creature can remake this save on each of their turns.',
		'Pushed 25 feet unless they pass a Strength save.  ',
		'Unless they pass a Constitution save, the creature is Poisoned. The creature can remake this save on each of their turns.',
		'Unless they pass a Wisdom save, the creature is Charmed.',
		'Unless they pass a Constitution save, the creature is Slowed. The creature can remake this save on each of their turns.',
		'Unless they pass a Constitution save, the creature is Slowed. The creature can remake this save on each of their turns.',
		'Knocked Prone unless they pass a Dexterity save. ',
		'Unless they pass a Constitution save, the creature is Deafened. The creature can remake this save on each of their turns.',
		'Knocked Prone unless they pass a Dexterity save. ',
		'Unless they pass a Constitution save, the creature gains 1 level of Exhaustion.',
		'Knocked Prone unless they pass a Dexterity save. ',
		'Unless they pass a Constitution save, the creature is Deafened. The creature can remake this save on each of their turns.',
		'Unless they pass a Constitution save, the creature gains 1 level of Exhaustion.',
		'Pushed 20 feet unless they pass a Strength save. ',
		'Resistance to Radiant damage until 1 round'

	],

	attacks : [
		`Aquatic Press of the Romantic Demons`,
		`Barbarian Raider Pinch of the Cemetary`,
		`Beetle Hold of the Fangs`,
		`Confident Badger Pinch of Lyres`,
		`Emperor's Roll of the Nine Volcanos`,
		`Firey Rake of the Endings`,
		`Fortuitous Underhook of the Wolves`,
		`God's Knee of Blessings`,
		`Hawk Dance`,
		`Heavenly Rat's Roll`,
		`Hellish Meteor`,
		`High Noose of the Ruthless Guardian`,
		`Hold of Poisons`,
		`King Drop of the Fighting Protectors`,
		`Leg Clap of the Dogs`,
		`Northeastern Seventeen Cats Claw`,
		`Phantasmal Plague Finger`,
		`Pose of Perfect Sunsets`,
		`Seal Hammer of the Forty Sages`,
		`Shaman Pull of Destructions`,
		`Southeastern Automaton Pull`,
		`Southwestern Eighty Chants Clap`,
		`Tackle of Foul Leaves`,
		`Tornado of the Uncounted Hawks`,
		`Yielding Throw of the Mills`,
	],

	abilities : [
		"Astrological Botany",
		"Astrological Chemistry",
		"Biochemical Sorcery",
		"Civil Alchemy",
		"Consecrated Biochemistry",
		"Demonic Anthropology",
		"Divinatory Mineralogy",
		"Genetic Banishing",
		"Hermetic Geography",
		"Immunological Incantations",
		"Nuclear Illusionism",
		"Ritual Astronomy",
		"Seismological Divination",
		"Spiritual Biochemistry",
		"Statistical Occultism",
		"Police Necromancer",
		"Sixgun Poisoner",
		"Pharmaceutical Gunslinger",
		"Infernal Banker",
		"Spell Analyst",
		"Gunslinger Corruptor",
		"Torque Interfacer",
		"Exo Interfacer",
		"Gunpowder Torturer",
		"Orbital Gravedigger",
		"Phased Linguist",
		"Mathematical Pharmacist",
		"Plasma Outlaw",
		"Malefic Chemist",
		"Police Cultist"
	],

	alignments : [
		"Annoying Evil",
		"Chaotic Gossipy",
		"Chaotic Sloppy",
		"Depressed Neutral",
		"Lawful Bogus",
		"Lawful Coy",
		"Manic-Depressive Evil",
		"Narrow-Minded Neutral",
		"Neutral Annoying",
		"Neutral Ignorant",
		"Oedpipal Neutral",
		"Silly Neutral",
		"Unoriginal Neutral",
		"Weird Neutral",
		"Wordy Evil",
		"Unaligned",
		"Lawful Gossipy",
		"Neurotic Good",
		"Sarcastic Evil",
		"Snotty Neutral",
		"Wannabe Good"
	],

	sizes : ['Microscopic', 'Tiny', 'Small', 'Medium', 'Large', 'Gargantuan', 'Stupidly vast'],
	levels : ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th"],


	sentences : [
		`The suspicion arises the narrator of the tale is actually a demon.`,
		`There is a predicted hurricane - but it's not what was expected, and this complicates the plans of the protagonist.`,
		`The antagonist's believes their life has changed for the strange - this turns out to be this is due to being lied to by others`,
		`An accidental cuddle leads to complications.`,
		`It's revealed that everything that is happening is all a dream.`,
		`There is a sudden hurricane.`,
		`The alternate protagonist is revealed to be a different race/species than thought, which suddenly makes what's going on much clearer.`,
		`Thanks to alien forces, the characters end up in the earth's past.`,
		`Thanks to alien forces, the secondary protagonist ends up in a world after an apocalypse.`,
		`Due to a panic attack a character has to get psychological therapy.`,
	],



	creatures : [
		"All-devouring Baseball Imp",
		"All-devouring Gumdrop Wraith",
		"Chocolate Hydra",
		"Devouring Peacock",
		"Economy-sized Colossus of the Lemonade Stand",
		"Ghost Pigeon",
		"Gibbering Duck",
		"Sparklemuffin Peacock Spider",
		"Gum Elemental",
		"Illiterate Construct of the Candy Store",
		"Ineffable Chihuahua",
		"Irritating Death Hamster",
		"Irritating Gold Mouse",
		"Juggernaut Snail",
		"Juggernaut of the Sock Drawer",
		"Koala of the Cosmos",
		"Mad Koala of the West",
		"Milk Djinni of the Lemonade Stand",
		"Mind Ferret",
		"Mystic Salt Spider",
		"Necrotic Halitosis Angel",
		"Pinstriped Famine Sheep",
		"Ritalin Leech",
		"Shocker Kangaroo",
		"Stellar Tennis Juggernaut",
		"Wailing Quail of the Sun",
		"Angel Pigeon",
		"Anime Sphinx",
		"Bored Avalanche Sheep of the Wasteland",
		"Devouring Nougat Sphinx of the Sock Drawer",
		"Djinni of the Footlocker",
		"Ectoplasmic Jazz Devil",
		"Flatuent Angel",
		"Gelatinous Duck of the Dream-Lands",
		"Gelatinous Mouse",
		"Golem of the Footlocker",
		"Lich Wombat",
		"Mechanical Sloth of the Past",
		"Milkshake Succubus",
		"Puffy Bone Peacock of the East",
		"Rainbow Manatee",
		"Rune Parrot",
		"Sand Cow",
		"Sinister Vanilla Dragon",
		"Snail of the North",
		"Spider of the Sewer",
		"Stellar Sawdust Leech",
		"Storm Anteater of Hell",
		"Stupid Spirit of the Brewery",
		"Time Kangaroo",
		"Tomb Poodle"

	]

};

module.exports = Data;