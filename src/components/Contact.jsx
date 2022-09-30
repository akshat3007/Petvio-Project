import React from 'react';
import styles, {layout} from "../style";

const Contact = () => {
  return (
    <section id="contact" className={`flex xl:flex-row flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className="text-dark sm:text-[80px] text-[40px]">Contact us</h2>
      </div>
      <div>
      <p className='sm:text-[40px] text-[18px] text-dark mt-9'>petvio.care.org
      Email: xyz@gmail.com
      <br />
      Phone: 1000100010
      <br />
      Address: VIT Bhopal University
      </p>
      </div>
    </section>
  )
}

export default Contact