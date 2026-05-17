document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navRegistro = document.getElementById('nav-registro');
    const navCitas = document.getElementById('nav-citas');
    const secRegistro = document.getElementById('registro');
    const secCitas = document.getElementById('citas');

    function switchSection(activeNav, activeSec, inactiveNav, inactiveSec) {
        activeNav.classList.add('active');
        inactiveNav.classList.remove('active');
        
        // Hide inactive section
        inactiveSec.style.display = 'none';
        
        // Show active section with a slight fade effect
        activeSec.style.display = 'block';
        activeSec.style.opacity = '0';
        setTimeout(() => {
            activeSec.style.transition = 'opacity 0.3s ease';
            activeSec.style.opacity = '1';
        }, 10);
    }

    navRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        switchSection(navRegistro, secRegistro, navCitas, secCitas);
    });

    navCitas.addEventListener('click', (e) => {
        e.preventDefault();
        switchSection(navCitas, secCitas, navRegistro, secRegistro);
    });

    // Form Submissions
    const patientForm = document.getElementById('patient-form');
    const appointmentForm = document.getElementById('appointment-form');
    const toast = document.getElementById('toast');

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    patientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here we would normally send data to a backend
        const name = document.getElementById('p-name').value;
        
        // Simulate processing
        const btn = patientForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Procesando...</span>';
        btn.disabled = true;

        setTimeout(() => {
            showToast(`✅ Paciente ${name} registrado con éxito.`);
            patientForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 800);
    });

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const patient = document.getElementById('a-patient').value;
        const date = document.getElementById('a-date').value;
        const time = document.getElementById('a-time').value;

        // Simulate processing
        const btn = appointmentForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Confirmando...</span>';
        btn.disabled = true;

        setTimeout(() => {
            showToast(`📅 Cita confirmada para ${patient} el ${date} a las ${time}.`);
            appointmentForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
            
            // Optionally, switch back to registration or clear
        }, 800);
    });
});