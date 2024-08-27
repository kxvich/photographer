import styles from './cssModules/WorkTitle.module.scss'

function workTitle() {
    return (
        <div>
            <h1 className={styles.workTitle}>
					<span className={styles.workTitleIcon}>
						<i className="fa-regular fa-circle"></i>
					</span>
					SMJ X DAVIDO
				</h1>
        </div>
    )
}

export default workTitle
