export default function Column({ title, check }) {
    return (
      <>
        <tr>
          <td>{title}</td>
          <td className="checks">
            {check ? (
              <img
                src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                alt=""
              />
            ) : null}
          </td>
          <td>
            {check ? (
              <img
                src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                alt=""
              />
            ) : null}
          </td>
          <td>
            {check ? (
              <img
                src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                alt=""
              />
            ) : null}
          </td>
          <td>
            {check ? (
              <img
                src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                alt=""
              />
            ) : null}
          </td>
        </tr>
      </>
    );
  }
  