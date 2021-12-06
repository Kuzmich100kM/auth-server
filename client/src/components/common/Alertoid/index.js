import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAlert, deleteAllAlerts } from "../../../reducers/alerts.reducer"

function Alertoid() {
	const dispatch = useDispatch()
	const { alertsMsg } = useSelector(state => state.alerts)

	const deleteMsg = id => dispatch(deleteAlert(id))
	const deleteAllMsg = () => dispatch(deleteAllAlerts())

	if (alertsMsg.length === 0) return <></>

	return (
		<div className="alerts">
			{alertsMsg.map(({ id, type, msg }) => (
				<div key={id} className={type}>
					<div>{msg}</div>
					<div className="btn btn-cross" onClick={() => deleteMsg(id)}></div>
				</div>
			))}
			{alertsMsg.length > 1 && (
				<button className="btn-link" onClick={() => deleteAllMsg()}>
					clear all
				</button>
			)}
		</div>
	)
}

export default Alertoid
