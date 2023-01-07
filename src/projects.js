import noterat from './assets/noterat.png';
import beauty from './assets/beauty_space_salon.png';
import muzify from './assets/muzify.png';
import trippin from './assets/trippin.png';
import ecommerce from './assets/beauty_ecommerce.png';



const projects = [
    {
        id: 1,
        name: 'Noterat.io',
        description:
            'cooperation on the development of a very interesting non-profit project which was established to make the political process visible to the public by providing and communicating public documents as well as statistics on public activities.  - Implementation of new design and new functionalities on the portal, taking into account the user experience.',
        technology: 'React Native, Figma prototyping',
        gitHubLink: '',
        media: noterat,
        lifeLink: 'https://www.noterat.io/'
    },
    {
        id: 2,
        name: 'Beauty Space Salon',
        description:
            'Freelance project for the Polish beauty salon. Its purpose is to present an offer and to facilitate customer contact. The project is still in production, apart from the fact that it will be a showcase of the company in the near future, it will be combined with a training platform for selling courses and with e-commerce.',
        technology: 'Next.js, React, TypeScipt, Sanity CMS, Tailwind CSS, Vercel',
        gitHubLink: 'https://github.com/SzymczykI/BeautySpace_salon',
        media: beauty,
        lifeLink: ''
    },
    {
        id: 3,
        name: 'Beauty Space E-commerce',
        description:
            'Full Stack E-commerce app for beauty industry (cosmetics store)',
        technology: 'Nextjs, Mongodb, React Hook, Bootstrap 4',
        gitHubLink: 'https://github.com/SzymczykI/BeautySpace_store',
        media: ecommerce,
        lifeLink: 'https://beauty-space-store.vercel.app'
    },
    {
        id: 4,
        name: 'TRIPPIN',
        description:
            'Web app Trippin was trip planner developed in cooperation with the team - group of four developers who met at SALT in January 2022, as a Graduation project. Thanks to app we are able to plan a road trip by setting an origin and a destination, and add own waypoints along the route. We can also get useful information like fuel cost estimate, distance and travel time.App gives possibility to create own account where we can easily manage saved trips.',
        technology: 'React, HTML, CSS, JavaScript, Express, MongoDB, Google Map API, Own RESTful API, Firebase, Heroku ',
        gitHubLink: 'https://github.com/SzymczykI/SALT-trippin',
        media: trippin,
        lifeLink: ''
    },
    {
        id: 5,
        name: 'Muzify',
        description:
            'Simple React todo list app using custom Hooks and local storage',
        technology: 'React, HTML, CSS, JavaScript, TypeScript ',
        gitHubLink: 'https://github.com/SzymczykI/Todo-App',
        media: muzify,
        lifeLink: ''
    },
]

export default projects