const t=document.querySelector('.nav-toggle'),n=document.querySelector('.main-nav');t?.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o))});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>n?.classList.remove('open')));const ws=document.getElementById('sendWhatsApp'),em=document.getElementById('sendEmail'),st=document.getElementById('formStatus');function d(){return{name:document.getElementById('name')?.value.trim()||'',phone:document.getElementById('phone')?.value.trim()||'',email:document.getElementById('email')?.value.trim()||'',practice:document.getElementById('practiceArea')?.value.trim()||'',message:document.getElementById('message')?.value.trim()||''}}function v(x){if(!x.name||!x.phone||!x.practice||!x.message){if(st){st.textContent='Please complete all required fields.';st.style.color='#b42318'}return false}return true}function c(x){return `Hello Pranesh Legal,

I would like to request a legal consultation.

Name: ${x.name}
Phone: ${x.phone}
Email: ${x.email||'Not provided'}
Practice area: ${x.practice}

Brief details:
${x.message}`}ws?.addEventListener('click',()=>{const x=d();if(!v(x))return;window.open(`https://wa.me/919213389446?text=${encodeURIComponent(c(x))}`,'_blank')});em?.addEventListener('click',()=>{const x=d();if(!v(x))return;location.href=`mailto:pranesh723@gmail.com?subject=${encodeURIComponent('Legal enquiry: '+x.practice)}&body=${encodeURIComponent(c(x))}`});