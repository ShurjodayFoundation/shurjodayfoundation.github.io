document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  // যদি পেজে নিউজলেটার ফর্ম থাকে, তবেই এই কোড কাজ করবে
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault(); // পেজ রিলোড হওয়া বন্ধ করবে

      const emailInput = document.getElementById("emailInput");
      const email = emailInput.value.trim();
      const msg = document.getElementById("formMessage");
      const submitBtn = this.querySelector('button[type="submit"]');

      // ইমেইল ভ্যালিডেশন
      if (!email.includes("@")) {
        msg.textContent = "সঠিক ইমেইল প্রদান করুন।";
        msg.className = "text-red-400 text-sm mt-2";
        return;
      }

      // লোডিং টেক্সট দেখানো
      submitBtn.textContent = "অপেক্ষা করুন...";
      submitBtn.disabled = true;

      // আপনার Google Sheet এর Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwhpOGn8aWxVK93MRWNxAWpBqOyqn2170nKHNgQLjQs6LEgHwjbghLig4JuQwqN_UlC/exec';

      // ডাটা প্রস্তুত করা
      const formData = new FormData();
      formData.append('email', email);

      // গুগলে ডাটা পাঠানো (URLSearchParams ব্যবহার করে ডাটা এনকোড করা হলো)
      fetch(scriptURL, { 
        method: 'POST', 
        body: new URLSearchParams(formData), 
        mode: 'no-cors' 
      })
      .then(() => {
        msg.textContent = "সফলভাবে সাবস্ক্রাইব হয়েছে!";
        msg.className = "text-[#B9F6CA] text-sm mt-2 font-bold";
        this.reset(); // ফর্ম ক্লিয়ার করা
        submitBtn.textContent = "সাবস্ক্রাইব করুন";
        submitBtn.disabled = false;

        // ৫ সেকেন্ড পর মেসেজ মুছে ফেলা
        setTimeout(() => {
          msg.textContent = "";
        }, 5000);
      })
      .catch(error => {
        msg.textContent = "কোনো সমস্যা হয়েছে, আবার চেষ্টা করুন।";
        msg.className = "text-red-400 text-sm mt-2";
        submitBtn.textContent = "সাবস্ক্রাইব করুন";
        submitBtn.disabled = false;
      });
    });
  }
});
