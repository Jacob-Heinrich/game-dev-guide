import React from 'react';
import NavBar from '../components/NavBar';
import Popup from 'reactjs-popup';
import Pop from '../components/Popup';

function ToolPage() {
  return(
    <>
    <NavBar />
    <h1 className = "toolsHeader">Tools</h1>
    <div className = "toolsContainer">
    <div className = "column column__column1">
    <h1> 3D-Modeling</h1>
    <ul className="itemList">
    <h2 className = "price">Free</h2>
    <li><a href="https://www.blender.org/" target="_blank">Blender</a>
      <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <h2 className = "price">Pay</h2>
    <li><a href="https://pixologic.com/" target="_blank">Zbrush</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://www.maxon.net/en/cinema-4d" target="_blank">Cinema 4D (Paid)</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    </ul>
    </div>
    <div className = "column column__column2">
    <h1>Game Engines</h1>
    <ul className="itemList">
    <h2 className = "price">Free</h2>
    <li><a href="https://unity.com/" target="_blank">Unity</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://www.unrealengine.com/en-US" target="_blank">Unreal Engine</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://aws.amazon.com/lumberyard/" target="_blank">Amazon Lumberyard</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://godotengine.org/" target="_blank">Godot</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://www.construct.net/en" target="_blank">Construct</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    </ul>
    </div>
    <div className = "column column__column3">
    <h1>Animation</h1>
    <ul className="itemList">
    <h2 className = "price">Pay</h2>
    <li><a href="https://moho.lostmarble.com/" target="_blank">Moho</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://www.autodesk.com/products/maya/overview?mktvar002=3282941%7CSEM%7C%7Bcampaignid%7D%7C%7Badgroupid%7D%7C%7BTargetId%7D&gclsrc=aw.ds&&ef_id=Cj0KCQjworiXBhDJARIsAMuzAuy1KcO-8Gq49yb8ep11VhEMKszbBKfRT-cuiV7xutzdkxGJrIT2gdcaAvKFEALw_wcB:G:s&s_kwcid=AL!11172!3!576638500777!e!!g!!autodesk%20maya!15994942310!134216357962&mkwid=s|pcrid|576638500777|pkw|autodesk%20maya|pmt|e|pdv|c|slid||pgrid|134216357962|ptaid|kwd-1971040707|pid|&utm_medium=cpc&utm_source=google&utm_campaign&utm_term=autodesk%20maya&utm_content=s|pcrid|576638500777|pkw|autodesk%20maya|pmt|e|pdv|c|slid||pgrid|134216357962|ptaid|kwd-1971040707|&gclid=Cj0KCQjworiXBhDJARIsAMuzAuy1KcO-8Gq49yb8ep11VhEMKszbBKfRT-cuiV7xutzdkxGJrIT2gdcaAvKFEALw_wcB&term=1-YEAR&tab=subscription&plc=MAYA" target="_blank">Maya</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <li><a href="https://www.adobe.com/products/animate.html?mv=affiliate&mv2=red" target="_blank">Adobe Animate</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    </ul>
    </div>
    <div className = 'column column__column4'>
    <h1>Illustration</h1>
    <ul className="itemList">
    <h2 className = "price">Free</h2>
    <li><a href="https://www.vectornator.io/" target="_blank">Vectornator</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    <h2 className = "price">Pay</h2>
    <li><a href="https://www.adobe.com/products/photoshop.html?mv=affiliate&mv2=red" target="_blank">Adobe Photoshop</a>
    <Pop title = "Blender" body="This software is great for beginners due to it being free and the range of tools it offers the user. Unlike Zbrush and Cinema 4D, there is no monthly subscription or steep buy in price. It has great user reviews although with the many tools and functionality it offers it can have a steep learning curve." requirements="64-bit quad core CPU with SSE2 support, 8 GB RAM, Full HD display, Mouse, trackpad or pen+tablet, Graphics card with 2 GB RAM, OpenGL 4.3, Less than 10 year old"/>
    </li>
    </ul>
    </div>
    </div>
    </>
  )

}

export default ToolPage;
