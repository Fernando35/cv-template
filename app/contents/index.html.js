var dateformat = require("dateformat");

var date = dateformat(new Date(), 'yyyy');

module.exports = {
    document: {
        title: "Eric MOREL"
    },
    contact: {
        title: 'Contact',
        item1: {
            caption: 'Téléphone ',
            data: '06 19 70 70 09'
        },
        item2: {
            caption: 'E-Mail ',
            data: '<a href="mailto:eric.morel35@gmail.com?subject=Contact">eric.morel35@gmail.com</a>'
        },
        item3: {
            caption: 'Adresse ',
            data: `6 rue des forgerons<br>35410 Nouvoitou`
        }
    },
    skills: {
        title: 'Compétences',
        item1:{
            subject: 'Java (Spring, Tomcat, Maven, Mockito), Kotlin',
            mark: 'skills__item-bar--very-good'
        },
        item2:{
            subject: 'IDE (Eclipse et IntelliJ)',
            mark: 'skills__item-bar--average'
        },
        item3:{
            subject: 'REST, SOAP',
            mark: 'skills__item-bar--very-good'
        },
        item4:{
            subject: 'Intégration continue (GitlabCI et Jenkins)',
            mark: 'skills__item-bar--good'
        },
        item5:{
            subject: 'Bases de données (Oracle, MongoDB, MariaDB)',
            mark: 'skills__item-bar--good'
        },
        item6:{
            subject: 'Système (Linux, Windows)',
            mark: 'skills__item-bar--good'
        },
		item7:{
            subject: 'Docker',
            mark: 'skills__item-bar--good'
        },
		item8:{
            subject: 'Git',
            mark: 'skills__item-bar--good'
        }
    },
    lang: {
        title: 'Langages',
        data: {
            lang1: {
                caption: 'Français ',
                level: 'langue maternelle'
            },
            lang2: {
                caption: 'Anglais ',
                level: 'technique'
            }
        }
    },
    aboutMe: {
        firstName: 'Eric',
        lastName: 'Morel',
        position: 'Développeur Java/JEE',
        summary: `Développeur avec 14 ans d'expérience en quête d'une mission permettant de devenir leader technique. Je suis passioné par les nouvelles technologies et l'apprentissage de nouvelles pratiques. J'aime le travail en équipe.`
    },
    experience:{
        title : 'Expériences',
        item1: {
            period: {
                start: 2012,
                end: date,
            },
            location: 'Cesson Sévigné',
            firm: 'SII',
            position: 'Développeur Java',
            summary: `- 4 missions pour la TV d\'Orange France sur des technologies très différentes : JEE/Spring, Shell, Dojo<br>
			Accompagnement d'alternants dans le cadre de refonte technique d'applications avec migration vers Java 11 (séparation back/front)<br>
			- 1 mission pour OBS (Développement full stack sur des applicatifs permettant la gestion de ressources réseaux)<br>
			- 3 missions en prestation pour Sopra Steria avec SII : sur le plateau Canal+, pour Edelia (filiale d'EDF) et dans les locaux de SFR à Rennes (MEP d'applicatif et astreintes le week end).<br>
			`
        },
		item2: {
            period: {
                start: 2010,
                end: 2012,
            },
            location: 'Orvault',
            firm: 'Accenture Technologies Solutions',
            position: 'Développeur Java',
            summary: `Développeur Back et Front sur le projet Quartzi permettant le rapprochement des SI de Vinci et Cegelec<br>
			Accueil et assistance d'un alternant sur le projet`
        },
		item3: {
			period: {
                start: 2007,
                end: 2010,
            },
            location: 'Vannes',
            firm: 'SAB Ingénierie Informatique',
            position: 'Développeur Cobol/Java',
            summary: `Maintenance et évolution des applicatifs anti blanchiment du progiciel bancaire SAB<br>
			Participation à l'élaboration d'un atelier de développement basé sur Eclipse RCP`
		}
			
    },
    education: {
        title: 'Diplômes',
		item1: {
            period: {
                start: 2018,
                end: 2019,
            },
            location: 'Rennes',
            school: 'ISTIC',
            degree: 'Master Ingénierie logicielle',
            summary: ``
        },
        item2: {
            period: {
                start: 2005,
                end: 2006,
            },
            location: 'Vannes',
            school: 'Université de Bretagne SUD',
            degree: 'IUT Informatique',
            summary: `IUT en année spéciale suite à mon BTS électronique`
        } 
        
    },
    interests: {
        title: 'Centres d\'intérêts',
        item1: {
            icon: 'icon--development',
            caption: 'Développement'
        },
		item2: {
            icon: 'icon--drilling-machine',
            caption: 'Bricolage'
        },
        item3: {
            icon: 'icon--saddle',
            caption: 'Sport'
        }
    }
};