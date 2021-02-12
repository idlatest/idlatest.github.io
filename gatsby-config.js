module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://idongesitntuk.netlify.app//`,
    // Your Name
    name: 'Idongesit Ntuk',
    // Main Site Title
    title: `Idongesit Ntuk | Web Developer`,
    // Description that goes under your name in main bio
    description: `Web Developer based in Cross River, Nigeria.`,
    // Optional: Twitter account handle
    author: `idlatest`,
    // Optional: Github account URL
    github: `https://github.com/idlatest`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/idlatest/`,
    // Content of the About Me section
    about: `I'm a motivated full-stack web developer who has experience building and scaling web applications and services in various domains. I love working with startups, working in high impact environments, and helping growing development teams build great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Pincode',
        description:
          'A ReactJS + SCSS based real-estate platform + Backend built with NodeJS and MySQL',
        link: 'https://github.com/idlatest',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Dual Sight Limited',
        description: 'Web Developer, October 2019 - Present',
        link: 'https://github.com/idlatest',
      },
      {
        name: 'EET Information Solutions',
        description: 'Web Developer, May 2019 - September 2019',
        link: 'https://github.com/idlatest',
      },
      {
        name: 'Bolenum Exchange',
        description: 'Web Developer, September 2018 - April 2019',
        link: 'https://github.com/idlatest',
      },
      {
        name: 'Efficient Information Institute',
        description: 'Instructor, May 2017 - April 2018',
        link: 'https://github.com/idlatest',
      },
      {
        name: 'Xeedom Technologies Limited',
        description: 'Web Developer, September 2014 - December 2016',
        link: 'https://github.com/idlatest',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'HTML, CSS, JavaScript (ES6+)',
      },
      {
        name: 'Frameworks',
        description:
          'Bootstrap, TailwindCSS, React, Vue, NodeJS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgreSQL, MySQL',
      },
      {
        name: 'Cloud Platform',
        description: 'Digital Ocean and AWS',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
