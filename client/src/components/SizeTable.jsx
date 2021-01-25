import React from 'react';
import css from './SizeTable.css';

const SizeTable = (props) => {
  return (
    <div className={css.productSizeChart}>
      <h2 className={css.title}>Size Chart</h2>
      <div className={css.sizeChartContainer}>
        <div className={css.tableResponse}>
          <table className={css.table}>
            <thead className={css.thead}>
              <tr>
                <td className={css.th}></td>
                <th className={css.th}><span>7</span></th>
                <th className={css.th}><span>6.5</span></th>
                <th className={css.th}><span>8</span></th>
                <th className={css.th}><span>7.5</span></th>
                <th className={css.th}><span>8.5</span></th>
                <th className={css.th}><span>9</span></th>
                <th className={css.th}><span>9.5</span></th>
                <th className={css.th}><span>10</span></th>
                <th className={css.th}><span>10.5</span></th>
                <th className={css.th}><span>11</span></th>
                <th className={css.th}><span>11.5</span></th>
                <th className={css.th}><span>12</span></th>
                <th className={css.th}><span>12.5</span></th>
                <th className={css.th}><span>13</span></th>
                <th className={css.th}><span>14</span></th>
                <th className={css.th}><span>26.5 Mondo</span></th>
                <th className={css.th}><span>27.5 Mondo</span></th>
                <th className={css.th}><span>28.5 Mondo</span></th>
                <th className={css.th}><span>29.5 Mondo</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={css.th}><span>U.S. Men's</span></th>
                <td className={css.th}>6.5</td>
                <td className={css.th}>7</td>
                <td className={css.th}>7.5</td>
                <td className={css.th}>8</td>
                <td className={css.th}>8.5</td>
                <td className={css.th}>9</td>
                <td className={css.th}>9.5</td>
                <td className={css.th}>10</td>
                <td className={css.th}>10.5</td>
                <td className={css.th}>11</td>
                <td className={css.th}>11.5</td>
                <td className={css.th}>12</td>
                <td className={css.th}>12.5</td>
                <td className={css.th}>13</td>
                <td className={css.th}>14</td>
                <td className={css.th}>8.5</td>
                <td className={css.th}>9.5</td>
                <td className={css.th}>10.5</td>
                <td className={css.th}>11.5</td>
              </tr>
              <tr>
                <th className={css.th}><span>U.S. Women's</span></th>
                <td className={css.th}>7.5</td>
                <td className={css.th}>8</td>
                <td className={css.th}>8.5</td>
                <td className={css.th}>9</td>
                <td className={css.th}>9.5</td>
                <td className={css.th}>10</td>
                <td className={css.th}>10.5</td>
                <td className={css.th}>11</td>
                <td className={css.th}>11.5</td>
                <td className={css.th}>12</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>9.5</td>
                <td className={css.th}>10.5</td>
                <td className={css.th}>11.5</td>
                <td className={css.th}>N/A</td>
              </tr>
              <tr>
                <th className={css.th}><span>UK</span></th>
                <td className={css.th}>6</td>
                <td className={css.th}>6.5</td>
                <td className={css.th}>7</td>
                <td className={css.th}>7.5</td>
                <td className={css.th}>8</td>
                <td className={css.th}>8.5</td>
                <td className={css.th}>9</td>
                <td className={css.th}>9.5</td>
                <td className={css.th}>10</td>
                <td className={css.th}>10.5</td>
                <td className={css.th}>11</td>
                <td className={css.th}>11.5</td>
                <td className={css.th}>12</td>
                <td className={css.th}>12.5</td>
                <td className={css.th}>13.5</td>
                <td className={css.th}>8</td>
                <td className={css.th}>9</td>
                <td className={css.th}>10</td>
                <td className={css.th}>11</td>
              </tr>
              <tr>
                <th className={css.th}><span>EU</span></th>
                <td className={css.th}>39.33</td>
                <td className={css.th}>40</td>
                <td className={css.th}>40.6</td>
                <td className={css.th}>41</td>
                <td className={css.th}>42</td>
                <td className={css.th}>42.6</td>
                <td className={css.th}>43.3</td>
                <td className={css.th}>44</td>
                <td className={css.th}>44.6</td>
                <td className={css.th}>45.3</td>
                <td className={css.th}>46</td>
                <td className={css.th}>46.6</td>
                <td className={css.th}>47.3</td>
                <td className={css.th}>48</td>
                <td className={css.th}>49.3</td>
                <td className={css.th}>42</td>
                <td className={css.th}>43.3</td>
                <td className={css.th}>44.6</td>
                <td className={css.th}>45</td>
              </tr>
              <tr>
                <th className={css.th}><span>Mondo</span></th>
                <td className={css.th}>24.5</td>
                <td className={css.th}>25</td>
                <td className={css.th}>25.5</td>
                <td className={css.th}>26</td>
                <td className={css.th}>26.5</td>
                <td className={css.th}>27</td>
                <td className={css.th}>27.5</td>
                <td className={css.th}>28</td>
                <td className={css.th}>28.5</td>
                <td className={css.th}>29</td>
                <td className={css.th}>29.5</td>
                <td className={css.th}>30</td>
                <td className={css.th}>30.5</td>
                <td className={css.th}>31</td>
                <td className={css.th}>32</td>
                <td className={css.th}>26.5</td>
                <td className={css.th}>27.5</td>
                <td className={css.th}>28.5</td>
                <td className={css.th}>29.5</td>
              </tr>
              <tr>
                <th className={css.th}><span>Foot Length (in.)</span></th>
                <td className={css.th}>9.6</td>
                <td className={css.th}>9.84</td>
                <td className={css.th}>10.04</td>
                <td className={css.th}>10.24</td>
                <td className={css.th}>10.47</td>
                <td className={css.th}>10.63</td>
                <td className={css.th}>10.83</td>
                <td className={css.th}>11.02</td>
                <td className={css.th}>11.22</td>
                <td className={css.th}>11.42</td>
                <td className={css.th}>11.61</td>
                <td className={css.th}>11.81</td>
                <td className={css.th}>12.01</td>
                <td className={css.th}>12.20</td>
                <td className={css.th}>N/A</td>
                <td className={css.th}>10.47</td>
                <td className={css.th}>10.83</td>
                <td className={css.th}>11.22</td>
                <td className={css.th}>11.61</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SizeTable;