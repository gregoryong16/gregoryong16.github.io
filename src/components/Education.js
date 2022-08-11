// import React from "react"
// import { Box } from "@chakra-ui/react"
// import {FaGraduationCap} from "react-icons/fa"

// export default function Education() {
//     return <div className="education_div">
//         <FaGraduationCap size={60} color='black' />
//         <Box className="education_university">
//             <h1 className="education-universityname">
//                 Nanyang Technological University, Singapore <br/> 
//                 Bachelor of Engineering(Computer Science) <br/>
//                 Aug 2020 - May 2024 (Expected)
//             </h1>
//             <ul className="education-universitypointers">
//               <li>Expected Honours (Distinction)</li>
//               <li>Achieved Distinction in Algorithm Design and Analysis and Advanced Computer Architecture</li>
//             </ul>
//         </Box>
//         <Box className="education_juniorcollege">
//         <h1 className="education-juniorcollegename">
//                 Nanyang Junior College, Singapore <br/> 
//                 Cambridge A levels (Science Major)<br/>
//                 Jan 2016 - Dec 2017
//             </h1>
//             <ul className="education-juniorcollegepointers">
//               <li>H2 Physics</li>
//               <li>H2 Mathematics</li>
//               <li>H2 Chemistry</li>
//               <li>H2 Economics</li>
//             </ul>
//         </Box>
//     </div>
// }

import React from 'react';
import {FaGraduationCap} from "react-icons/fa"
import NTU from "../images/ntu.png"
import nyjc from "../images/nyjc.png"

const EXP = [
	{
		title: 'Bachelor of Engineering(Computer Science)',
		subtitle: 'Aug 2020 - May 2024 (Expected)',
		desc: (
			<p>
				Expected Honours (Distinction)<br />
                <br />
                Achieved Distinction in Algorithm Design and Analysis and Advanced Computer Architecture
			</p>
		),
		image: NTU,
	},
	{
		title: 'Cambridge A levels (Science Major)',
		subtitle: 'Jan 2016 - Dec 2017',
		desc: (
			<p>
				Science Major <br />
				<br />
				H2 Physics, H2 Chemistry, H2 Mathematics, H2 Econs
			</p>
		),
		image: nyjc,
	},
];
const Experiences = () => {
	return (
		<>
			<div className="education_div">
				<div className='expFlex'>
                    <FaGraduationCap size={100} color='black' />
					<div className='grid-container'>
						{EXP.map((item, index) => (
							<div className='grid-item' key={index}>
								<div className='item-image-container'>
									<img src={item.image} alt="education"/>
								</div>
								<div className='item-title'>{item.title}</div>
								<div className='item-subtitle'>{item.subtitle}</div>
								<div className='item-desc'>{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Experiences;