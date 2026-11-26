// Main JavaScript for Web Profil Modern

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Interactive Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formSuccessModal = document.getElementById('form-success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalSenderName = document.getElementById('modal-sender-name');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const categoryInput = document.getElementById('inquiry-category');
      const subjectInput = document.getElementById('message-subject');
      const messageInput = document.getElementById('message-content');

      const name = nameInput ? nameInput.value.trim() : '';
      const category = categoryInput ? categoryInput.value : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !subject || !message) {
        alert('Mohon lengkapi semua kolom yang bertanda bintang (*).');
        return;
      }

      // Store in localStorage for simulated history
      try {
        const storedMessages = JSON.parse(localStorage.getItem('web_messages') || '[]');
        storedMessages.push({
          name,
          category,
          subject,
          message,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('web_messages', JSON.stringify(storedMessages));
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Display Confirmation Modal
      if (modalSenderName) {
        modalSenderName.textContent = name;
      }
      if (formSuccessModal) {
        formSuccessModal.classList.remove('hidden');
        formSuccessModal.classList.add('flex');
      }

      // Reset form
      contactForm.reset();
    });
  }

  if (closeModalBtn && formSuccessModal) {
    closeModalBtn.addEventListener('click', () => {
      formSuccessModal.classList.add('hidden');
      formSuccessModal.classList.remove('flex');
    });
  }

  // 3. FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      if (answer) {
        const isHidden = answer.classList.contains('hidden');
        // Close all other open answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

        if (isHidden) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });

  // 4. Highlight Current Navigation Item based on URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('text-blue-600', 'font-semibold');
      link.classList.remove('text-slate-600');
    }
  });
});
