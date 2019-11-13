import React from 'react';

class AvailableTimesTable extends React.Component {
    render() {
        return (
            <section class="section">
                <div class="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><abbr title="Zonas em Portugal">Local</abbr></th>
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
                                            <th>{item}</th>
                                            <td>{availableTimesObj.timestamp.toDate().toISOString()}</td>
                                            {Object.keys(availableTimesObj.datas).length > 0 ? 
                                                <td>
                                                    {Object.entries(availableTimesObj.datas).map((itemAvailable, idxDate) => {
                                                    const datetime = `${itemAvailable[0]} ${itemAvailable[1]}`;
                                                        return (
                                                            <span className="tag is-primary margin" key={idxDate}>{datetime}</span>
                                                        )
                                                    })}
                                                </td>
                                            :<td>
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