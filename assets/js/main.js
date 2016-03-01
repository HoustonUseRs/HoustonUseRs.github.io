(function(window){

  document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      initialize();
    }
  }

  function initialize(){
    displayTopics('r-talks', rTalks);
    setUpExternalLinks();
  }


  function displayTopics(wrapperId, topics){
    var wrapperDOM = document.getElementById(wrapperId);
    var makeTopic = setupMakeTopic();

    var topicsHTML = _.map(topics, function(topic){
        var topicDOM = makeTopic(topic);
        if(topic.parts){
          _.each(topic.parts, function(part){
            topicDOM.appendChild(makeTopic(part, 'part'))
          });
        }
        return topicDOM.outerHTML;
      })
      .join('');

    wrapperDOM.innerHTML = topicsHTML;
  }


  function setupMakeTopic(){
    var headingDOM = document.createElement('h4');
    var pDOM = document.createElement('p');
    var aDOM = document.createElement('a');

    var topicWrapperDOM = document.createElement('li');
    topicWrapperDOM.classList.add('list-group-item');

    var partWrapperDOM = pDOM.cloneNode();

    var wrappers = {
      topic: topicWrapperDOM,
      part: partWrapperDOM
    };

    var headings = {
      topic: headingDOM,
      part: pDOM
    };

    return function (topic, type){
      var wrapper = wrappers[type] || wrappers.topic,
        topicHeading = headings[type] || headings.topic,
        topicHeadingDOM, slidesLinkDOM, descriptionDOM, meetupLinkDOM;

      wrapper = wrapper.cloneNode();
      topicHeading = topicHeading.cloneNode();

      if(topic.title){
        topicHeading.innerText = topic.title;
        topicHeadingDOM = topicHeading;
      }

      if(topic.slides){
        slidesLinkDOM = aDOM.cloneNode();
        slidesLinkDOM.href = topic.slides;
      }

      if(topic.title && topic.slides){
        slidesLinkDOM.appendChild(topicHeading);
        topicHeadingDOM = slidesLinkDOM
      }

      wrapper.appendChild(topicHeadingDOM);

      if(topic.description){
        descriptionDOM = pDOM.cloneNode();
        descriptionDOM.innerHTML = marked(topic.description);

        wrapper.appendChild(descriptionDOM);
      }

      if(topic.meetup){
        meetupLinkDOM = aDOM.cloneNode();
        meetupLinkDOM.href = topic.meetup;

        lastDOM = _.last(wrapper.children);

        _.last(wrapper.children).children[0].appendChild(meetupLinkDOM);
      }

      return wrapper;
    }

  }

  function setUpExternalLinks(){
    var links = document.querySelectorAll('a[href^="http"]');

    _.each(links, function(link){
      if(isLinkExternal(link.href)){
        openLinkInNewTab(link);
      }
    });

    function openLinkInNewTab(link){
      link.target = '_blank';
    }

    function isLinkExternal(url){
      var domainRe = /https?:\/\/((?:[\w\d\-]+\.)+[\w\d\-]{2,})/i;

      function domain(url) {
        var domainSplit = domainRe.exec(url);
        if(domainSplit){
          domainSplit = domainSplit[1];
        }
        return domainSplit;
      }
      return domain(location.href) !== domain(url);
    }
  }


}(window))