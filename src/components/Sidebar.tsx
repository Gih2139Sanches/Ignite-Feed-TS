import { PencilLine } from '@phosphor-icons/react'

import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
             />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/gih2139sanches.png"/>
                <strong>Giovana Sanches</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Ediar seu perfil
                </a>
            </footer>
        </aside>
    );
}