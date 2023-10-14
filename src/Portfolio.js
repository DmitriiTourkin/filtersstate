import React, { Component } from 'react';
function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={selected === filter ? 'active' : ''}>
          {filter}
        </button>
      ))}
    </div>
  );
}


function ProjectList({projects}) {
  return (
      <div className="projects">
        {projects.map(project => (
            <div key={project.img} className="project">
              <img src={project.img} alt={project.category} />
              <div className="project-info">
                <h3>{project.category}</h3>
                <p>{project.category}</p>
              </div>
            </div>
        ))}
      </div>
  );
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects: [{
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                  category: "Business Cards"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                  category: "Business Cards"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                  category: "Business Cards"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                  category: "Flayers"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                  category: "Business Cards"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                  category: "Business Cards"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                  category: "Websites"
                }, {
                  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                  category: "Flayers"
                }]
    };
  }

  onSelectFilter = filter => {
    this.setState({
      selected: filter
    });
  };

  filterProjects = () => {
    const { projects, selected } = this.state;
    if (selected === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selected);
  };

  render() {
    const { selected } = this.state;
    const filteredProjects = this.filterProjects();

    return (
      <div>
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
