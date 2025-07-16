import React from 'react';
import './ProjectDescription.css';

const ProjectDescription = () => {
    return (
        <section className="project-description">
            <h2>Опис проєкту</h2>
            <p>
                Цей проєкт створено в рамках вивчення React. Це простий шаблон сторінки,
                який демонструє основні принципи компонентної архітектури React.
            </p>
            <ul>
                <li>Використовується функціональні компоненти</li>
                <li>Модульна CSS архітектура</li>
                <li>Адаптивний дизайн</li>
                <li>Сучасний підхід до розробки</li>
            </ul>
        </section>
    );
};

export default ProjectDescription;