

const peopleList = document.getElementById("peapole-list")
const selectPerson = document.getElementById("select-person")

const informationArray = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      occupation: "Software Engineer",
      location: "New York, USA",
      hobbies: ["Coding", "Gaming", "Hiking"],
      contact: {
        email: "john.doe@example.com",
        phone: "+1-234-567-890"
      },
      active: true,
      salary: 85000,
      projects: ["Project Alpha", "Project Beta"],
      languagesSpoken: ["English", "Spanish"],
      certification: {
        title: "AWS Certified Solutions Architect",
        year: 2022
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      occupation: "Graphic Designer",
      location: "San Francisco, USA",
      hobbies: ["Drawing", "Photography", "Traveling"],
      contact: {
        email: "jane.smith@example.com",
        phone: "+1-987-654-321"
      },
      active: false,
      salary: 70000,
      projects: ["Branding for ABC Corp", "Illustrations for XYZ Studio"],
      languagesSpoken: ["English", "French"],
      certification: {
        title: "Certified Adobe Expert",
        year: 2021
      }
    },
    {
      id: 3,
      name: "Ali Ahmed",
      age: 24,
      occupation: "Data Analyst",
      location: "Dubai, UAE",
      hobbies: ["Reading", "Basketball", "Chess"],
      contact: {
        email: "ali.ahmed@example.com",
        phone: "+971-1234-5678"
      },
      active: true,
      salary: 60000,
      projects: ["Data Insights for Retail", "Customer Analysis"],
      languagesSpoken: ["Arabic", "English"],
      certification: {
        title: "Data Science Professional Certificate",
        year: 2023
      }
    },
    {
      id: 4,
      name: "Maria Gomez",
      age: 29,
      occupation: "Marketing Manager",
      location: "Madrid, Spain",
      hobbies: ["Public Speaking", "Traveling", "Cooking"],
      contact: {
        email: "maria.gomez@example.com",
        phone: "+34-5678-1234"
      },
      active: true,
      salary: 75000,
      projects: ["Campaign Launch for DEF Corp", "Market Analysis for EFG Ltd"],
      languagesSpoken: ["Spanish", "English", "German"],
      certification: {
        title: "Digital Marketing Certified Associate",
        year: 2020
      }
    },
    {
      id: 5,
      name: "Ahmed Khan",
      age: 35,
      occupation: "Mechanical Engineer",
      location: "Karachi, Pakistan",
      hobbies: ["Cycling", "Robotics", "Automobile Design"],
      contact: {
        email: "ahmed.khan@example.com",
        phone: "+92-300-123-4567"
      },
      active: false,
      salary: 54000,
      projects: ["Vehicle Automation", "Product Design for XYZ Autos"],
      languagesSpoken: ["Urdu", "English"],
      certification: {
        title: "Certified Mechanical Engineer",
        year: 2018
      }
    },
    {
      id: 6,
      name: "Fatima Al-Saadi",
      age: 30,
      occupation: "Biomedical Scientist",
      location: "Riyadh, Saudi Arabia",
    //   hobbies: ["Research", "Fitness", "Gardening"],
      contact: {
        email: "fatima.al.saadi@example.com",
        phone: "+966-1234-5678"
      },
      active: true,
      salary: 92000,
      projects: ["Cancer Research", "Clinical Trials Analysis"],
      languagesSpoken: ["Arabic", "English"],
      certification: {
        title: "PhD in Biomedical Sciences",
        year: 2019
      }
    },
    {
      id: 7,
      name: "Liu Wei",
      age: 27,
      occupation: "UX/UI Designer",
      location: "Beijing, China",
      hobbies: ["Design", "Calligraphy", "Music"],
      contact: {
        email: "liu.wei@example.com",
        phone: "+86-10-1234-5678"
      },
      active: true,
      salary: 68000,
      projects: ["Website Redesign for GHI Co", "Mobile App UX for JKL Ltd"],
      languagesSpoken: ["Mandarin", "English"],
      certification: {
        title: "Certified UX Professional",
        year: 2021
      }
    },
    {
      id: 8,
      name: "Rajesh Patel",
      age: 40,
      occupation: "Business Analyst",
      location: "Mumbai, India",
      hobbies: ["Cricket", "Stock Market Investing", "Technology"],
      contact: {
        email: "rajesh.patel@example.com",
        phone: "+91-22-1234-5678"
      },
      active: true,
      salary: 72000,
      projects: ["Financial Analysis for ABC Bank", "Market Research for DEF Inc"],
      languagesSpoken: ["Hindi", "English", "Gujarati"],
      certification: {
        title: "Certified Business Analyst Professional (CBAP)",
        year: 2017
      }
    },
    {
      id: 9,
      name: "Sara Johnson",
      age: 26,
      occupation: "Content Writer",
      location: "London, UK",
      hobbies: ["Blogging", "Creative Writing", "Yoga"],
      contact: {
        email: "sara.johnson@example.com",
        phone: "+44-20-1234-5678"
      },
      active: true,
      salary: 58000,
      projects: ["Content Strategy for PQR Ltd", "SEO Optimization for STU Group"],
    //   languagesSpoken: ["English", "Spanish"],
      certification: {
        title: "Certified Content Marketing Specialist",
        year: 2022
      }
    },
    {
      id: 10,
      name: "Yusuf Bin Saeed",
      age: 45,
      occupation: "Project Manager",
      location: "Istanbul, Turkey",
      hobbies: ["Project Management", "Photography", "Chess"],
      contact: {
        // email: "yusuf.b.saeed@example.com",
        phone: "+90-212-123-4567"
      },
      active: false,
      salary: 95000,
      projects: ["Construction Management for DEF Corp", "Logistics Coordination for GHI Ltd"],
      languagesSpoken: ["Turkish", "Arabic", "English"],
      certification: {
        title: "PMP (Project Management Professional)",
        year: 2016
      }
    }
  ];
  
  const renderPerson = (people) => {
    people.map( (person) => {
        const li = document.createElement("li")
        li.innerHTML = `
            <p>Name: ${person.name}</p>
        `
        peopleList.appendChild(li)

        li.addEventListener("click", () => {
            personName(person.id)
        })

    })
  }

  const hendlePeople = (person) => {
    selectPerson.innerHTML = `
        <h2 class="text-2xl font-bold">${person.name}</h2>
        <p>
        Contact: 
            <span>${person?.contact?.email || "N/A"}</span>
            <span>${person?.contact?.phone || "N/A"}</span>
        </p>
        <p>Project: ${person?.projects?.map((item) => item) || "N/A"}</p>
        <p>Hobbies: ${person?.hobbies?.map((hobby) => hobby)|| "N/A"}</p>
        <p>Language: ${person?.languagesSpoken?.map((language) => language)|| "N/A"}</p>
    `
    
  }

  const personName = (id) => {
    const person = informationArray.find((p) => p.id === id )
    hendlePeople(person)
  }
  
  renderPerson(informationArray)
