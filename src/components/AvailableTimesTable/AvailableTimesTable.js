import React from 'react';

class AvailableTimesTable extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th colspan="3"><abbr title="Zonas em Portugal">Local</abbr></th>
                                <th>Última atualização</th>
                                <th><abbr title="Datas disponiveis">Datas</abbr></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th><abbr title="Zonas em Portugal">Local</abbr></th>
                                <th>Última atualização</th>
                                <th><abbr title="Datas disponiveis">Datas</abbr></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {this.props.availableTimes !== undefined && Object.keys(this.props.availableTimes).map((item, idxRegion) => {
                                const availableTimesObj = this.props.availableTimes[item];
                                    return (
                                        <tr key={idxRegion}>
                                            <th colspan="3">{item}</th>
                                            <td>
                                                {availableTimesObj.timestamp.toDate().toLocaleDateString()} {availableTimesObj.timestamp.toDate().toLocaleTimeString()}
                                            </td>
                                            {Object.keys(availableTimesObj.datas).length > 0 ? 
                                                <td>
                                                    {Object.entries(availableTimesObj.datas).map((itemAvailable, idxDate) => {
                                                    const datetime = `${itemAvailable[0]} ${itemAvailable[1]}`;
                                                        return (
                                                            <span className="tag is-primary margin float" key={idxDate}>{datetime}</span>
                                                        )
                                                    })}
                                                </td>
                                            :<td colspan="4">
                                                <span className="tag is-danger margin">Essa região não possui disponibilidade.</span>
                                            </td>}
                                            
                                        </tr>
                                    )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default AvailableTimesTable;