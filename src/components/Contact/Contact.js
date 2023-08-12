import React from "react";
import BackgroundImage from '../Utils/BackgroundImage';

import data from '../../resources/contact.env.json';
import image from '../../img/image_1.png';
import '../Contact/contact.css';

const Contact = () => {
    return (

        <div id="contact">
            <BackgroundImage src={image} />
            <div id="contact-container">
                <h2>{data["contact.title.text"]}</h2>
                <div id="contact-data">
                    <p id="contact-email">{data["contact.email.key"]} {data["contact.email.value.text"]}</p>
                    <p id="contact-phone">{data["contact.phone.key"]} {data["contact.phone.value.text"]}</p>
                    </div>
                <h3>{data["contact.section.message.title"]}</h3>
                <div id="user-info">
                    <label class="inline">
                        {data["contact.section.message.user.name.label"]}
                        <input
                            name="user-name"
                            type="text"
                            placeholder={data["contact.section.message.user.name.placeholder"]}
                        />
                    </label>

                    <label class="inline">
                        {data["contact.section.message.user.email.label"]}
                        <input
                            name="user-email"
                            type="text"
                            placeholder={data["contact.section.message.user.email.placeholder"]}
                        />
                    </label>

                    <label class="inline">
                        {data["contact.section.message.user.phone.label"]}
                        <input
                            name="user-phone"
                            type="number"
                            placeholder={data["contact.section.message.user.phone.placeholder"]}
                        />
                    </label>

                    <label>
                        {data["contact.section.message.user.description.label"]}
                        <textarea
                            name="user-description"
                            rows={4}
                            cols={40}
                            placeholder={data["contact.section.message.user.description.placeholder"]}
                        />
                    </label>

                    <button >{data["conteact.section.message.user.description.send"]}</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;