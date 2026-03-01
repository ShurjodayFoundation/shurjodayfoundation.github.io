const navbarHTML = `
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div class="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
      
      <!-- LOGO & BRAND NAME START -->
      <a href="index.html" class="flex items-center gap-3 hover:opacity-90 transition">
        
        <!-- আপডেট করা অংশ: -->
        <!-- ইমেজের নামের বানান ঠিক আছে কিনা নিশ্চিত হোন। যদি jpg হয় তবে .jpg দিন -->
        <img src="./images/logo1.png" alt="SF Logo" class="h-12 w-auto object-contain">
        
        <span class="text-xl font-bold text-[#008E48]">সূর্যোদয় ফাউন্ডেশন</span>
      </a>
      <!-- LOGO & BRAND NAME END -->

      <div class="flex items-center space-x-6">
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6 text-sm font-medium" id="desktop-menu">
          <a href="about.html" class="nav-link text-[#1f2937] hover:text-[#008E48] transition">আমাদের সম্পর্কে</a>
          <a href="media.html" class="nav-link text-[#1f2937] hover:text-[#008E48] transition">মিডিয়া</a>
          <a href="members.html" class="nav-link text-[#1f2937] hover:text-[#008E48] transition">সদস্যবৃন্দ</a>
          <a href="contact.html" class="nav-link text-[#1f2937] hover:text-[#008E48] transition">যোগাযোগ</a>
        </div>
        <!-- Donate Button -->
        <a href="donate.html" class="hidden md:inline-block bg-[#008E48] text-white px-8 py-2 text-lg font-semibold rounded-lg hover:bg-[#163322] transition">
          ডোনেট করুন
        </a>
        <!-- Hamburger -->
        <button id="menuBtn" class="text-2xl md:hidden text-[#1f2937]">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="absolute top-full left-0 w-full bg-white text-[#1f2937] px-6 pb-6 space-y-4 transform -translate-x-full transition-transform duration-300 ease-in-out md:hidden shadow-md">
      <a href="about.html" class="mobile-nav-link block pt-2">আমাদের সম্পর্কে</a>
      <a href="media.html" class="mobile-nav-link block">মিডিয়া</a>
      <a href="members.html" class="mobile-nav-link block">সদস্যবৃন্দ</a>
      <a href="contact.html" class="mobile-nav-link block">যোগাযোগ</a>
      <a href="donate.html" class="block bg-[#008E48] text-white px-4 py-2 rounded-lg text-center mt-2">ডোনেট করুন</a>
    </div>
  </nav>
`;

document.addEventListener("DOMContentLoaded", function() {
  const navContainer = document.getElementById("navbar-container");
  if (navContainer) {
    navContainer.innerHTML = navbarHTML;
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('#desktop-menu .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-[#008E48]', 'font-bold');
      link.classList.remove('text-[#1f2937]', 'hover:text-[#008E48]');
    }
  });

  document.querySelectorAll('#mobileMenu .mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-[#008E48]', 'font-bold');
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      if (mobileMenu.classList.contains("-translate-x-full")) {
        mobileMenu.classList.remove("-translate-x-full");
        mobileMenu.classList.add("translate-x-0");
      } else {
        mobileMenu.classList.add("-translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
      }
    });

    document.addEventListener("click", (e) => {
      const isMenuOpen = mobileMenu.classList.contains("translate-x-0");
      const isClickInsideMenu = mobileMenu.contains(e.target);
      const isClickOnBtn = menuBtn.contains(e.target);

      if (isMenuOpen && !isClickInsideMenu && !isClickOnBtn) {
        mobileMenu.classList.add("-translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
      }
    });
  }
});
