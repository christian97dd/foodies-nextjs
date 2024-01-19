import Image from 'next/image';
import classes from './page.module.css';

const MealsSlugPage = () => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill />
                </div>
                <div className={classes.headerText}>
                    <h1>TITLE</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'email'}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>
                        SUMMARY
                    </p>
                </div>
            </header>
            <main></main>
        </>
    )
}

export default MealsSlugPage;
