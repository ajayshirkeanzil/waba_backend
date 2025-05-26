import pool from "../../db.connection.js";

export const getPortfolio = async (req, res, next) => {
    const {phone_number_id,whatsapp_number} = req.body
  try {
    const result = await pool.query(
      `SELECT
    bp.portfolio_id,
    bp.portfolio_name,
    bp.description AS portfolio_description,
    wba.whatsapp_number,
    wba.display_name,
    s.service_name,
    t.template_name,
    t.template_body,
    t.language,
    t.category
FROM
    whatsapp_business_acount AS wba
JOIN
    business_portfolio AS bp
    ON wba.portfolio_id = bp.portfolio_id
LEFT JOIN
    whatsapp_account_service AS was
    ON wba.whatsapp_business_account_id = was.whatsapp_business_account_id
LEFT JOIN
    service AS s
    ON was.service_id = s.service_id
LEFT JOIN
    service_template AS st
    ON s.service_id = st.service_id
LEFT JOIN
    template AS t
    ON st.template_id = t.template_id
WHERE
    wba.phone_number_id = ? AND wba.whatsapp_number = ?`,
      [phone_number_id,whatsapp_number]
    );
    console.log(result,"Res")
    // let ress = JSON.parse(JSON.stringify(String(result)))
    res.send({data:result});
  } catch (error) {
    next(error);
  }
};
