// ============================================
// MARDEN - DATA ANALYST PORTFOLIO v2.0
// JavaScript Completo com 15+ Animações
// ============================================

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.particles = new Particles();
        this.scrollObserver = new ScrollObserver();
        this.typingEffect();
        this.animateStats();
        this.navbarScroll();
        this.skillBars();
        this.carousel();
        this.contactForm();
        this.timelineAnimation();
        this.mobileMenu();
        this.scrollToTop();
        this.interactiveCards();
        this.glassEffect();
        this.soundEffects();
        this.pwaInstall();
    }

    // 🎯 1. EFEITO DIGITAÇÃO HERO
    // 🎯 1. EFEITO DIGITAÇÃO HERO (MÚLTIPLAS FRASES)
    typingEffect() {
        // Aqui você define as frases que vão ficar alternando
        const words = [
            "Analista de Dados",
            "Data Business Partner",
            "Especialista em Power BI",
            "Focado em Inteligência de Negócios"
        ];
        
        const typingEl = document.getElementById('typing-text');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Apagando
                typingEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Escrevendo
                typingEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            // Velocidade da digitação
            let typeSpeed = isDeleting ? 50 : 100;

            // Se terminou de escrever a palavra
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pausa de 2 segundos antes de apagar
                isDeleting = true;
            } 
            // Se terminou de apagar a palavra
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Vai para a próxima palavra
                typeSpeed = 500; // Pausa antes de começar a digitar a nova
            }

            setTimeout(type, typeSpeed);
        }
        
        // Inicia o efeito
        type();
    }

    // 📊 2. ANIMAÇÃO CONTADORES ESTATÍSTICAS
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    let count = 0;
                    const increment = target / 100;
                    
                    const timer = setInterval(() => {
                        count += increment;
                        entry.target.textContent = Math.floor(count) + '+';
                        
                        if (count >= target) {
                            entry.target.textContent = target + '+';
                            clearInterval(timer);
                        }
                    }, 20);
                }
            });
        });

        stats.forEach(stat => observer.observe(stat));
    }

    // 📱 3. NAVBAR SCROLL & GLASS EFFECT
    navbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(30px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.9)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        });
    }

    // 🎨 4. BARS DE SKILL ANIMADAS
    skillBars() {
        const skills = document.querySelectorAll('.skill-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.querySelector('.skill-progress');
                    const width = progress.dataset.width;
                    
                    progress.style.width = '0%';
                    progress.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    setTimeout(() => {
                        progress.style.width = width + '%';
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        skills.forEach(skill => observer.observe(skill));
    }

    // 🔄 5. CARROSSEL 3D PROJETOS
    // 🔄 5. CARROSSEL 3D PROJETOS - CORRIGIDO
carousel() {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardWidth = 100 / 3;
    
    function updateCarousel() {
        const translateX = -(currentIndex * cardWidth);
        track.style.transform = `translateX(${translateX}%)`;
        prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
        nextBtn.style.opacity = currentIndex === totalCards - 3 ? '0.4' : '1';
    }
    
    // Navegação pelos botões
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 3;
        }
        updateCarousel();
    });

// Clique na imagem OU no botão "Demo" abre a página de detalhes
    cards.forEach((card) => {
        const projectId = card.dataset.modal; 
        
        // Pega a área da imagem
        const projectImage = card.querySelector('.project-image');
        
        // Pega ESPECIFICAMENTE o botão que está dentro das tags de link
        const demoButton = card.querySelector('.project-links .modal-trigger'); 
        
        const openProjectDetail = (e) => {
            if (e) e.preventDefault();
            window.open(`project-detail.html?project=${projectId}`, '_self');
        };

        if (projectImage) {
            projectImage.style.cursor = 'pointer';
            projectImage.addEventListener('click', openProjectDetail);
        }

        if (demoButton) {
            demoButton.addEventListener('click', openProjectDetail);
        }
    });
    
    updateCarousel();
}

    // 📝 6. FORMULÁRIO CONTATO INTERATIVO
    contactForm() {
        const form = document.getElementById('contactForm');
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede a página de recarregar
            
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML; // Guarda o texto original do botão
            
            // Animação de enviando...
            btn.innerHTML = 'Enviando... <span class="spinner"></span>';
            btn.disabled = true;
            
            try {
                // Envia os dados para o Formspree
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Se deu certo
                    btn.innerHTML = '✅ Mensagem Enviada!';
                    btn.style.background = 'var(--accent)';
                    form.reset(); // Limpa os campos
                } else {
                    // Se deu erro no envio
                    btn.innerHTML = '❌ Erro ao enviar. Tente novamente.';
                    btn.style.background = '#ef4444'; // Fica vermelho
                }
            } catch (error) {
                // Se o usuário estiver sem internet
                btn.innerHTML = '❌ Erro de conexão.';
                btn.style.background = '#ef4444';
            }

            // Volta o botão ao normal depois de 3 segundos
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        });
    }

    // ⏱️ 7. TIMELINE ANIMAÇÃO SCROLL
    timelineAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    
                    // Dots animation
                    const dot = entry.target.querySelector('.timeline-dot');
                    dot.style.background = 'var(--accent)';
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = item.classList.contains('left') ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(item);
        });
    }

    // 📱 8. MENU MOBILE RESPONSIVO
    mobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        // Abre e fecha clicando no botão
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu automaticamente quando clica em algum link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ⬆️ 9. SCROLL TO TOP AUTOMÁTICO
    scrollToTop() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.createScrollToTop();
            }
        });
    }

    createScrollToTop() {
        if (document.querySelector('.scroll-top')) return;
        
        const btn = document.createElement('button');
        btn.className = 'scroll-top';
        btn.innerHTML = '⬆️';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);
    }

    // 🖱️ 10. CARDS INTERATIVOS 3D
    interactiveCards() {
        const cards = document.querySelectorAll('.skill-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.transform = `rotateY(${((x - rect.width / 2) / 20)}deg) rotateX(${((rect.height / 2 - y) / 20)}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });
        });
    }

    // 🥛 11. EFEITO GLASS MORPHISM
    glassEffect() {
        const glassElements = document.querySelectorAll('[data-glass]');
        
        const updateGlass = () => {
            glassElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                const y = window.scrollY * speed;
                el.style.transform = `translateY(${y}px)`;
            });
        };
        
        window.addEventListener('scroll', updateGlass);
    }

    // 🔊 12. EFEITOS SONOROS SUBTIS
    soundEffects() {
        // Cria AudioContext para efeitos
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => this.playClickSound());
        });
    }

    playClickSound() {
        const oscillator = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.1);
        
        oscillator.start(this.audioCtx.currentTime);
        oscillator.stop(this.audioCtx.currentTime + 0.1);
    }

    // 📲 13. PWA INSTALL PROMPT
    pwaInstall() {
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });
        
        // Botão install (adicione no HTML se quiser)
        document.addEventListener('click', (e) => {
            if (e.target.matches('#install-btn')) {
                deferredPrompt.prompt();
            }
        });
    }
}

// 🌟 14. SISTEMA DE PARTÍCULAS PERSONALIZADO
class Particles {
    constructor() {
        this.canvas = document.getElementById('particles');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.particles = [];
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (Math.random() < 0.1) {
            this.particles.push(new Particle(this.canvas));
        }
        
        this.particles = this.particles.filter(p => !p.isDead());
        this.particles.forEach(p => p.update(this.ctx));
        
        requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.vy = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.005;
        this.hue = Math.random() * 60 + 200; // Azul/verde dados
    }

    update(ctx) {
        this.x += this.vx;
        this.y -= this.vy;
        this.life -= this.decay;
        
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = `hsl(${this.hue}, 70%, ${50 + this.life * 30}%)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsl(${this.hue}, 70%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    isDead() {
        return this.life <= 0 || this.y < 0;
    }
}

// 👁️ 15. OBSERVADOR SCROLL AVANÇADO
class ScrollObserver {
    constructor() {
        this.initObserver();
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}

// 🚀 INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    
    // Smooth scroll para todos os links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

