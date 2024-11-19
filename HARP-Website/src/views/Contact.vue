<template>
    <div>
        <div class="contact">
        <h1>Contact Us</h1>
        <div class="cards">
            <ContactCard 
            :icon="singleIcon" 
            header1="Got questions?" 
            header2="We will answer questions you have about our technologies"
            buttonLabel="Contact" 
            gradientStart="#158bc2" 
            gradientEnd="#6788c8" 
            @open-modal="showModal = true"
            />
            <ContactCard 
            :icon="doubleIcon"
            header1="Partner with us!" 
            header2="We are always looking for new and exciting collaborations!"
            buttonLabel="Partner" 
            gradientStart="#1F1CD0" 
            gradientEnd="#AAB7D2" 
            @open-modal="showModalB = true"
            />
        </div>
    </div>

    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
        <!-- Close button -->
        <button class="close-icon" @click="showModal = false">×</button>

        <h2>Got Questions?</h2>
        <form @submit.prevent="handleSubmit">
            <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
            </div>
            <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
            </div>
            <div>
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <div>
            <!-- Gradient submit button -->
            <GradientButton
                label="Submit"
                :gradientStart="'#158bc2'"
                :gradientEnd="'#6788c8'"
                type="submit"
            />
            </div>
        </form>
        </div>
    </div>

        <div v-if="showModalB" class="modal-overlay">
            <div class="modal-content">
                <button class="close-icon" @click="showModalB = false">×</button>

                <h2>Join us on our journey!</h2>
                <form @submit.prevent="handlePartnerSubmit">
                <div>
                    <label for="partner-name">Name</label>
                    <input type="text" id="partner-name" v-model="partnerForm.name" required />
                </div>
                <div>
                    <label for="partner-email">Email</label>
                    <input type="email" id="partner-email" v-model="partnerForm.email" required />
                </div>
                <div>
                    <label for="partner-message">Message</label>
                    <textarea id="partner-message" v-model="partnerForm.message" required></textarea>
                </div>
                <div>
                    <GradientButton
                    label="Submit"
                    :gradientStart="'#1F1CD0'"
                    :gradientEnd="'#AAB7D2'"
                    type="submit"
                    />
                </div>
                </form>
            </div>
        </div>


    <Footer/>
    </div>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue';
import GradientButton from '@/components/GradientButton.vue';
import Footer from '@/components/Footer.vue';
import singleIcon from '@/assets/singleIcon.png';
import doubleIcon from '@/assets/doubleIcon.png';
import { ref } from 'vue';

const showModal = ref(false);
const showModalB = ref(false);

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
});

const partnerForm = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      alert('Form submitted and saved!');
      showModal.value = false;
    } else {
      alert('Failed to save form data.');
    }
  } catch (error) {
    console.error('Error saving form data:', error);
    alert('Failed to save form data.');
  }
};

const handlePartnerSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(partnerForm.value),
    });

    if (response.ok) {
      alert('Partner form submitted and saved!');
      showModalB.value = false;
    } else {
      alert('Failed to save partner form data.');
    }
  } catch (error) {
    console.error('Error saving partner form data:', error);
    alert('Failed to save partner form data.');
  }
};

</script>

<style lang="css" scoped>
    h1 {
        padding-top: 10rem;
        color: white;
        font-weight: bold;
    }
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding: 2rem; 
    }
    .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; 
        gap: 1rem;
        margin-top: 1rem; 
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);  /* Dark overlay */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 2.5rem;
        width: 50vw ;
        max-width: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
        background: linear-gradient(301deg, rgba(21,139,194,1) 0%, rgba(103,136,200,1) 100%);
        transition: all 0.3s ease;
        color: white;
    }
    .modal-content h2{
        display: flex;
        justify-content: center;
    }
    .modal-content form div {
        margin-bottom: 1rem;
    }
    .modal-content label {
        display: block;
        margin-bottom: 0.25rem;
    }
    .modal-content input {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 1rem;
    }
    .modal-content textarea {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 1rem;
        height: 8rem;
    }

    .modal-content button {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        background: #158bc2;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .modal-content button[type="button"] {
        background: #ccc;
    }

    .close-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }

    .close-icon:hover {
        color: #ccc;
    }

    .modal-content {
        position: relative;
    }
     /* Media queries for smaller screens */
     @media (max-width: 768px) {
        .cards {
            flex-direction: column; /* Stack the cards vertically */
            align-items: center;
        }

        .modal-content {
            width: 90vw; /* Make the modal width responsive */
            padding: 1.5rem;
        }

        .modal-content input, 
        .modal-content textarea {
            padding: 1rem; /* Increase input padding for better touch experience */
            font-size: 1rem; /* Adjust font size */
        }

        .modal-content button {
            padding: 0.8rem 1.2rem; /* Adjust button padding */
            font-size: 1rem; /* Adjust font size */
        }

        .close-icon {
            font-size: 1.2rem; /* Smaller close icon */
            top: 0.5rem;
            right: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.5rem; /* Make the heading smaller on mobile */
            padding-top: 5rem; /* Adjust top padding */
        }

        .cards {
            gap: 1.5rem; /* Reduce gap between cards on mobile */
        }

        .modal-content {
            width: 95vw; /* Full width modal on very small screens */
            padding: 1rem;
        }

        .modal-content input,
        .modal-content textarea {
            padding: 1.2rem; /* Increase input padding */
            font-size: 0.9rem; /* Adjust font size */
        }

        .modal-content button {
            padding: 0.7rem 1rem; /* Adjust button padding */
            font-size: 0.9rem; /* Adjust font size */
        }

        .close-icon {
            font-size: 1rem; /* Smaller close icon */
        }
    }

</style>