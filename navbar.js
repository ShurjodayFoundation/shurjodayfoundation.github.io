const navbarHTML = `
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div class="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
      
      <!-- LOGO & BRAND NAME START -->
      <a href="index.html" class="flex items-center gap-3 hover:opacity-90 transition">
        <!-- আপনার লোগোর লিংক নিচে দিন (যেমন: images/logo.png) -->
        <img src="images/logo.png" alt="Logo" class="h-10 w-auto object-contain">
        
        <!-- যদি লোগোর পাশে নাম রাখতে চান, তবে নিচের লাইনটি রাখুন। না চাইলে মুছে দিন -->
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
  // ১. নেভিগেশন বারটি পেজে যুক্ত করা
  const navContainer = document.getElementById("navbar-container");
  if (navContainer) {
    navContainer.innerHTML = navbarHTML;
  }

  // ২. ডাইনামিক অ্যাক্টিভ মেনু হাইলাইট করা
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // ডেস্কটপ মেনু হাইলাইট
  document.querySelectorAll('#desktop-menu .nav-link').forEach(link => {
    // যদি href এবং currentPath হুবহু মিলে অথবা home page এর ক্ষেত্রে
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-[#008E48]', 'font-bold');
      link.classList.remove('text-[#1f2937]', 'hover:text-[#008E48]');
    }
  });

  // মোবাইল মেনু হাইলাইট
  document.querySelectorAll('#mobileMenu .mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-[#008E48]', 'font-bold');
    }
  });

  // ৩. মোবাইল হ্যামবার্গার মেনু টগল এবং Outside Click Logic
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    // বাটনে ক্লিক করলে মেনু খুলবে/বন্ধ হবে
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // ইভেন্টটি যেন ডকুমেন্টে না ছড়ায়
      if (mobileMenu.classList.contains("-translate-x-full")) {
        mobileMenu.classList.remove("-translate-x-full");
        mobileMenu.classList.add("translate-x-0");
      } else {
        mobileMenu.classList.add("-translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
      }
    });

    // মেনুর বাইরে কোথাও ক্লিক করলে মেনু বন্ধ হয়ে যাবে
    document.addEventListener("click", (e) => {
      const isMenuOpen = mobileMenu.classList.contains("translate-x-0");
      const isClickInsideMenu = mobileMenu.contains(e.target);
      const isClickOnBtn = menuBtn.contains(e.target);

      // যদি মেনু খোলা থাকে এবং ক্লিকটি মেনু বা বাটনের ভেতরে না হয়
      if (isMenuOpen && !isClickInsideMenu && !isClickOnBtn) {
        mobileMenu.classList.add("-translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
      }
    });
  }
});
