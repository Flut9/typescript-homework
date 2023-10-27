import classnames from 'classnames'
import { CharacterGenderResponse, CharacterStatusResponse } from '../../types'
import styles from './character-card.module.scss'

type CharacterCardProps = {
    imgUrl: string,
    name: string,
    status: CharacterStatusResponse,
    species: string,
    gender: CharacterGenderResponse,
    disabled?: boolean,
}

export const CharacterCard = ({
  imgUrl,
  name,
  status,
  species,
  gender,
  disabled = false,
}: CharacterCardProps) => {
  return (
    <div className={classnames(styles.card, { [styles.disabled]: disabled })}>
      <div className={styles.image}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <div className={(styles.secondaryText, styles.status)}>
            <div
              className={classnames(styles.dot, {
                [styles.danger]: status === "Dead",
                [styles.unknown]: status === "unknown",
              })}
            />
            <span>{status}</span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Species:</div>
          <div>{species}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.secondaryText}>Gender:</div>
          <div>{gender}</div>
        </div>
      </div>
    </div>
  )
}
