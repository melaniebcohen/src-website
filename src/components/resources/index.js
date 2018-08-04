import React from 'react';
import resources from '../../lib/resources';
import './_resources-style.scss';

const Resources = () => {
  return ( 
    <div className='resources'>
      <h3>Resources</h3>
      <table>
        <tbody>
          {resources.map((resource) =>
            <tr key={resource.img}>
              <td><img src={resource.img} /></td>
              <td>
                <div>
                  <p>{resource.title}</p>
                  <div>{resource.desc}</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Resources;
