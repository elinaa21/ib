import React from 'react';
import './about.css';
import icon from '../../img/about_icon.png';
import serv from '../../img/about_serv.png';

function About() {
  return (
      <div className="about_main">
        <div className="about_header_all">
          <img className="about_img" src={icon} />
          <h3 className="about_header">О компании</h3>
        </div>
        <div className="about_content_all">
          <p className="about_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sodales facilisis ante, et malesuada ante faucibus et. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nulla dapibus erat eget
            posuere laoreet. Vivamus et nisl vitae diam accumsan blandit.
            <br />
            <br />
            Donec consectetur tortor non tellus elementum, nec mattis ex
            posuere. Etiam velit magna, luctus a pharetra sit amet, euismod vel
            libero. Donec sed lorem velit. Maecenas eget justo vel erat bibendum
            semper in sed nunc. Aliquam tempor dui non cursus iaculis.
            <br />
            <br />
            Vivamus id arcu nunc. Nullam lacus mi, condimentum at hendrerit non,
            posuere accumsan ante. Maecenas sed gravida lacus, a dictum lectus.
            Aenean eros risus, porttitor eget porta id, rhoncus eget lectus.
            Cras iaculis fermentum dui sit amet consequat.
            <br />
            <br />
            Proin sed sapien quis dui consectetur fringilla in tempor nibh.
            Mauris ac leo dignissim, fermentum quam vel, mattis enim. Nullam
            tempus, ligula eu aliquam maximus, justo est ultrices quam, molestie
            dictum odio nunc sed ligula. Sed id dolor volutpat, malesuada urna
            id, condimentum neque.
          </p>
          <button className="about_button">Стать клиентом</button>
        </div>
        <img className="about_pic" src={serv} />
      </div>
  );
}

export default About;
