// {
//   title: '',
//   slides: '',
//   description: '',
//   meetup: '',
//   date: YYYYMMDD,
//   parts: [{
//     title: '',
//     slides: '',
//     description: '',
//     meetup: '',
//     date: YYYYMMDD
//   }]
// }

var rTalks = [
  {
    title: 'Intro to ggplot2',
    description: 'Amanda will lead a discussion and hands-on plotting with ggplot2, the standard in plotting with R. We\'ll study the philosophy and history of the library, and work together to make a simple plot.\n\nThen, we\'ll each get hands-on experience making different plots, theming our plots, and extending components of ggplot2. If we\'re curious, we\'ll even peak into the library\'s code to learn more.',
    meetup: 'https://www.meetup.com/houstonr/events/237405341/',
    date: 20170207,
    parts: [{
      title: 'Star Wars Risk Slides and Code',
      slides: 'https://github.com/KonoAnalytics/BoardGames'
    }, {
      title: 'Philosophy and history of ggplot2',
      slides: 'https://houstonusers.github.io/intro-to-ggplot2/'
    }, {
      title: 'ggplot2 examples',
      slides: 'https://houstonusers.github.io/intro-to-ggplot2/workshop.nb'
    }]
  },
  {
    title: 'Exploring PCA and MDS, reducing (data) dimensions',
    description: 'We will discuss, using PCA (principal component analysis) and MDS (multidimension scaling) as a tool for data exploration and analysis. Both methods attempt to reduce dimensions of the data but take slightly different approaches. We will walk through various functions in R which enable us to perform the calculations and visualize the results.',
    meetup: 'https://www.meetup.com/houstonr/events/236486569/',
    date: 20170103,
    parts: [{
      title: 'Notes',
      slides: 'http://y3l2n.com/jupyter-blog/2017-01-03-Houston-R-Users.html'
    }, {
      title: 'Multidimension scaling example',
      slides: 'https://houstonusers.github.io/dimension-reduction/mds.nb'
    }, {
      title: 'PCA on iris data example',
      slides: 'https://houstonusers.github.io/dimension-reduction/pca_iris.nb'
    }]
  },
  {
    title: 'An Introduction to Stan and RStan',
    slides: 'https://houstonusers.github.io/intro-to-stan-and-rstan/presentation.pdf',
    description: 'Michael shares a very thorough introduction to a Bayesian workflow in R.  He covers the hows and whys for Bayesian analysis in R including:\n\n1. Bayesian Inference\n\n1. Generalized Linear Mixed Effect Models\n\n1. MCMC Convergence and Model Assessment\n\n1. how to use Stan to apply Bayesian methods\n\n1. and an example of his workflow with financial time series data to run Stochastic Volatility Models.\n\nHis code for this talk can be found [*here*](https://github.com/HoustonUseRs/intro-to-stan-and-rstan/tree/master/code).',
    meetup: 'https://www.meetup.com/houstonr/events/235256320/',
    date: 20161206
  },
  {
    title: 'Neuroimaging analysis tools in R',
    description: ' ',
    meetup: 'https://www.meetup.com/houstonr/events/232830049/',
    parts: [{
      title: 'Neuroimaging Analysis in R: Image Preprocessing',
      slides: 'https://github.com/emsweene/Houston_R_Users_Talk/blob/master/Presentation.pdf',
      description: 'Elizabeth gives us a look into the awesome world of neuroimaging analysis with R. The work in this area has obvious applications to medical and neurocognitive research, but beyond that there are solutions to applications to working with big data and image data. Presentation repo [*here*](https://github.com/emsweene/Houston_R_Users_Talk). Youtube [*here*](https://youtu.be/6tDbdNTwEuA)'
    }, {
      title: 'Why you should check your BLAS',
      slides: '',
      description: 'Neeraj shows us some results from his experiments linking R to different linear algebra libraries. Youtube [*here*](https://youtu.be/UKfqgqt3ahA)'
    }],
    date: 20160906
  },
  {
    title: 'Natural language processing with R',
    slides: 'http://www.slideshare.net/egoodwintx/hrug-text-mining-to-construct-causal-models',
    description: 'Scott shares some of his PhD work using natural language processing to pull useful information out from medical records data. Topics touched upon includes text pre-processing, Bayesian networks, and prediction performance (ROC curves).',
    meetup: 'https://www.meetup.com/houstonr/events/232829992/',
    date: 20160802
  },
  {
    title: 'useR2016 - Conference Updates',
    slides: 'http://rpubs.com/vakjha/194071',
    description: 'Varun recaps and shares his expereience at UseR 2016',
    meetup: 'http://www.meetup.com/houstonr/events/232109289/',
    date: 20160705
  },
  {
    title: 'Workflow Series Capstone - Pulling together the pieces',
    description: ' ',
    meetup: 'http://www.meetup.com/houstonr/events/230916869/',
    parts: [{
      title: 'R Style Guide',
      slides: 'http://houstonusers.github.io/r-style-guide',
      description: 'Ju talks about the R style guide.  Presentation repo [*here*](https://github.com/houstonusers/r-style-guide).'
    }, {
      title: 'Workflow Series Capstone',
      slides: '',
      description: 'Ed guides us on how to pull together all the pieces we\'ve been discussing so far this year to make an HRUG package'
    }],
    date: 20160607
  },
  {
    title: 'ggplot2 Themes and Unit Testing',
    description: ' ',
    meetup: 'http://www.meetup.com/houstonr/events/228848273/',
    parts: [{
      title: 'Introduction to ggplot2 Themes',
      slides: 'http://houstonusers.github.io/hrug_pres_ggtheme',
      description: 'Boyd shares the whys and hows of ggplot2 theming.  Presentation repo [*here*](https://github.com/bskelton/hrug_pres_ggtheme).'
    }, {
      title: 'Unit Testing in R',
      slides: 'http://www.slideshare.net/egoodwintx/unit-testing-in-r-with-testthat-hrug',
      description: 'Ed talks about unit testing and using the testthat package.  [*Code*](https://github.com/egoodwintx/hrugtestexample) of test example.'
    }],
    date: 20160405
  },
  {
    title: 'Production Code in R',
    slides: './production-code-in-r/',
    description: 'Hadley Wickam shares his thoughts about production code in R.',
    meetup: 'http://www.meetup.com/houstonr/events/227950604/',
    date: 20160301
  }, {
    title: 'Intro to KnitR',
    slides: './intro-to-knitr/',
    description: 'For literate programming, reproducible research and constructing reports',
    meetup: 'http://www.meetup.com/houstonr/events/227950530/',
    date: 20160202
  }, {
    title: 'Intro to RStudio',
    slides: 'http://www.slideshare.net/egoodwintx/intro-to-rstudio',
    description: 'An introductory tour of RStudio and some of the tools that it makes available to R developers',
    meetup: 'http://www.meetup.com/houstonr/events/227558375/',
    date: 20160105
  }, {
    title: 'Intro to flowr',
    slides: 'http://sahilseth.com/slides/flowrintro/index.html',
    description: '[*flowr*](http://docs.flowr.space/) helps you implement complex workflows',
    meetup: 'http://www.meetup.com/houstonr/events/225718611/',
    date: 20151006
  }, {
    title: 'Fantasy Football Draft Optimization in R',
    slides: 'http://www.slideshare.net/egoodwintx/fantasy-football-draft-optimization-in-r-hrug',
    description: '[*code*](https://github.com/egoodwintx/FantasyFootballR)',
    meetup: 'http://www.meetup.com/houstonr/events/225718611/',
    date: 20151006
  }, {
    title: 'Time Series Forecasting',
    parts: [{
      title: 'Part 1',
      slides: 'http://www.slideshare.net/egoodwintx/hrug-intro-to-forecasting',
      meetup: 'http://www.meetup.com/houstonr/events/219352785/',
      date: 20150105
    }, {
      title: 'Part 2 - Discussing dummy variables and transform methods',
      slides: 'http://www.slideshare.net/egoodwintx/intro-to-forecasting-part-2-hrug',
      meetup: 'http://www.meetup.com/houstonr/events/220042625/',
      date: 20150203
    }, {
      title: 'Part 3',
      slides: 'http://www.slideshare.net/egoodwintx/hrug-intro-to-forecasting-3',
      meetup: 'http://www.meetup.com/houstonr/events/222824502/',
      date: 20150602
    }, {
      title: 'Part 4 - A discussion of stationarity and ARIMA models',
      slides: 'http://www.slideshare.net/egoodwintx/intro-to-forecasting-in-r-part-4',
      meetup: 'http://www.meetup.com/houstonr/events/227097955/',
      date: 20151201
    }]
  }, {
    title: 'Applications of Growth Mixture Models',
    slides: 'https://docs.google.com/presentation/d/1-kj3fo6eqa5emvcrR8JNZTYjkIX50DVX32Ntly1Xd-0/pub?start=false&loop=false&delayms=3000',
    description: '"The Growth Mixture Model (GMM) identifies distinct subgroups of trajectories within longitudinal data."',
    meetup: 'http://www.meetup.com/houstonr/events/223458091/',
    date: 20150707
  }
];
