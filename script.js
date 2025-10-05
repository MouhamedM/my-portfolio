// Enhanced Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const nav = document.querySelector(".nav")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Enhanced Navigation Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  })
})

// Enhanced Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// CV Download functionality
// CV Download functionality
// CV Download functionality
function downloadCV() {
    const a = document.createElement("a")
    a.href = "assets/cv/mon-cv.pdf" // chemin vers ton vrai CV
    a.download = "Mohammed_EL_HASSANI_CV.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  




// Enhanced Scroll Animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
}

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      
      // Animate language progress bars
      const progressBars = entry.target.querySelectorAll(".language-progress")
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          const width = bar.style.width
          bar.style.width = "0%"
          setTimeout(() => {
            bar.style.width = width
          }, 100)
        }, index * 200)
      })
      
      // Animate stats counters
      const statNumbers = entry.target.querySelectorAll(".stat-number")
      statNumbers.forEach((stat) => {
        const finalValue = stat.textContent
        const isNumber = finalValue.match(/\d+/)
        if (isNumber) {
          const number = parseInt(isNumber[0])
          animateCounter(stat, 0, number, 1500)
        }
      })
    }
  })
}, observerOptions)

// Counter animation function
function animateCounter(element, start, end, duration) {
  const range = end - start
  const increment = range / (duration / 16)
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      current = end
      clearInterval(timer)
    }
    
    const suffix = element.textContent.replace(/\d+/, '')
    element.textContent = Math.floor(current) + suffix
  }, 16)
}

// Apply scroll animations to all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "all 0.8s ease-out"
  animateOnScroll.observe(section)
})

// Animate skill cards on hover
document.querySelectorAll(".skill-category").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })
  
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.textContent = ""
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    const originalText = typingElement.textContent
    setTimeout(() => {
      typeWriter(typingElement, originalText, 80)
    }, 1000)
  }
})

// Parallax effect for hero shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")
  
  shapes.forEach((shape, index) => {
    const speed = 0.5 + (index * 0.2)
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
  })
})

// Enhanced mobile menu animation
const style = document.createElement('style')
style.textContent = `
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`
document.head.appendChild(style)







