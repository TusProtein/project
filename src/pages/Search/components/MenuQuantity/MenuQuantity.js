import classNames from "classnames/bind"
import styles from './MenuQuantity.module.scss'
import Button from '../../../../components/Button'


const cx = classNames.bind(styles)

function MenuQuantity({ data }) {
  return (
    <div className = {cx('wrapper')}>
      <div className={cx('title')}>
        <h3>Search Results</h3>
      </div>
      <div className={cx('content')}>
        <ul>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>{data.quantityMovies}</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>TV Show</Button>
            <span className={cx('quantity')}>{data.quantityTv}</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>People</Button>
            <span className={cx('quantity')}>{data.quantityPeople}</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Companies</Button>
            <span className={cx('quantity')}>{data.quantityCompanies}</span>
          </li><li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>{data.quantityCollections}</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Keywords</Button>
            <span className={cx('quantity')}>{data.quantityKeywords}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuQuantity
