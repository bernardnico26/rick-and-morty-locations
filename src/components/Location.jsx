import ResidentInfo from "./ResidentInfo.jsx";

const Location = ({ Locations,residentspaged }) => {
  const renderResidents = () => {
    if (Locations.residents?.length === 0) {
      return (
        <div className="noResidents">
            <div className='noResidentsMenssage'>
                <span>¡Atencion!</span>
                <img src="https://media.tenor.com/JLs7yBYpTwsAAAAd/rick-and-morty-screaming.gif" alt="" />
                <p>This location hasn`t inhabitants.</p>
            </div>
            <hr className='hrexample'/>
            <div className='sectionExample'>
                <p>if it had inhabitants they would look like this:</p>
                <div className="residentCardExample">
                    <div className="residentInfoExample">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="resident_image_example" />
                        <section className="nameExample">
                                <h1>
                                    Rick Sanchez
                                </h1>
                        </section>
                            <hr className='hrcard'/>
                        <section className="residentsDescriptionExample">
                                <div>
                                    <h2>
                                        Origin:
                                    </h2>
                                    <h3>
                                        Earth (C-137)
                                    </h3>
                                </div>
                                <div>
                                    <h2>
                                        appearances:
                                    </h2>
                                    <h3>
                                        51
                                    </h3>
                                </div>
                        </section>
                        <div className="statusExample">
                            <h2>
                                status:
                            </h2>
                            <h3>
                            <i className='bx bxs-heart bx-burst bx-flip-horizontal alive' ></i> Alive
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    } else {
        return (
        <div className="ResidentsDates">
            {
                residentspaged?.map(resident => (
                    < ResidentInfo
                    key={resident}
                    resident={resident}
                    />
                ))
            }
        </div>
        );
    }
    };

    return (
    <div className="barsection">
        <li className="locationbarr">
            <ul className="locationinfo">
                <div>
                    <h3>Nombre:</h3>
                    <h4>{Locations.name}</h4>
                </div>

                <div>
                    <h3>Tipo:</h3>
                    <h4>{Locations.type}</h4>
                </div>

                <div>
                    <h3>Dimensión:</h3>
                    <h4>{Locations.dimension}</h4>
                </div>

                <div>
                    <h3>Población:</h3>
                    <h4 key={Locations.residents}>{Locations.residents?.length}</h4>
                </div>
            </ul>
        </li>
        {renderResidents()}
    </div>
    );
};

export default Location;
