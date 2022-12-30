import Image from 'next/image';
import { Button } from '../components';
import profileImg from '../asset/alimazoya.png';
import { contactData } from '../data/data';
import { useState } from 'react';
import { useFormik } from 'formik';
import { contactSchema } from '../utils/validator';
import { postData } from '../utils/fetchData';
import Head from 'next/head';

export default function Contact() {
    const [isSubmited, setIsubmited] = useState(false);
    const [alertMessage, setAlertMessage] = useState({ message: '', isSuccess: false });
    const onSubmit = async () => {
        setIsubmited(true);
        let data = await postData('messages', { ...values });
        if (data.acknowledged) {
            setAlertMessage({ ...alertMessage, message: 'Your message was recieved, I will get back to you in a moment', isSuccess: true });
        } else {
            setAlertMessage({ ...alertMessage, message: 'An error occurred while sending your message please try again' });
        }
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: contactSchema,
        onSubmit: onSubmit
    });

    return (
        <>
            <Head>
                <title>Alimazoya | Full Stack Developer - Contact</title>
            </Head>
            <div className="contact">
                <div className="contact_left">
                    <div className="proficiency_title">Contact Me</div>
                    <div className="contact_title_text">
                        You can reach out to me via any of these channels or drop me a message here, I will be glad to respond.
                    </div>
                    <div className="intro_name_bar"></div>
                    <div className="message_container">
                        <div className="message_container_title">Send a message</div>
                        <div className="message_container_title_text">Got a question? Need my service? Kindly drop your message here...</div>
                        <div className={`${alertMessage.isSuccess ? 'response_message_success' : 'response_message_error'}`}>
                            {alertMessage.message}
                        </div>
                        <form className="message_box" onSubmit={handleSubmit} noValidate>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={`${errors.name && touched.name && 'input_error'}`}
                                />
                                <div className="error_hint">{errors.name}</div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${errors.email && touched.email && 'input_error'}`}
                                />
                                <div className="error_hint">{errors.email}</div>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    rows={10}
                                    placeholder="Type your message...."
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${errors.message && touched.message && 'input_error'}`}
                                ></textarea>
                                <div className="error_hint">{errors.message}</div>
                            </div>
                            <div className="contact_submit_btn">
                                <Button text="Send Message" isLink={false} disabled={isSubmited} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact_right">
                    <div className="img_div">
                        <Image src={profileImg} priority={true} alt="alimazoya david" />
                    </div>
                    <div className="contact_right_socials">
                        <div className="socials_title">You can also get in touch with me via any of these links.</div>
                        <div className="socials_container">
                            {contactData.map((item) => (
                                <div className="socials" key={item.id}>
                                    <div className="left">
                                        <Image priority={true} src={item.icon} alt="github" />
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="right">{item.link}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
