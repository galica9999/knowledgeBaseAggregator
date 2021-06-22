import React, { useState } from 'react';
import axios from 'axios';

const AddAdmin = ({ article, isAdmin }) => {
  const [newAdmin, setNewAdmin] = useState('');
  const [newAdminTeam, setNewAdminTeam] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    async function AddAdmin(newAdmin, newAdminTeam) {
      try {
        //post call here
        setNewAdmin('');
        setNewAdminTeam('');

        setIsLoading(false);
        let parsedResponse = JSON.parse('response');
        if (parsedResponse === 'admin added') {
          alert('admin added, please refresh');
        } else {
          setIsError(true);
          alert(parsedResponse);
        }
        return 'response';
      } catch (error) {
        setIsError(true);
        alert(error);
      }
    }
    AddAdmin(newAdmin, newAdminTeam);
  };

  return (
    <div>
      {isAdmin ? (
        <div className="tab-pane active">
          <h3 className="text-center">Add Admin</h3>
          <form className="base-margin-right" onSubmit={handleSubmit}>
            <div className="form-group dropdown base-margin-top">
              <div className="form-group__text base-margin-top">
                <input
                  id="input-layout-stacked-1"
                  placeholder="ryan"
                  type="text"
                  value={newAdmin}
                  onChange={(e) => setNewAdmin(e.target.value)}
                />
                <label htmlFor="input-layout-stacked-1">
                  New Admin Username:
                </label>
              </div>
              {newAdmin === '' && (
                <div className="form-group__help">
                  <span className="text-danger">Please input a username</span>
                </div>
              )}
              <div className="form-group__text base-margin-top">
                <input
                  id="input-layout-stacked-2"
                  placeholder="team"
                  type="text"
                  value={newAdminTeam}
                  onChange={(e) => setNewAdminTeam(e.target.value)}
                />
                <label htmlFor="input-layout-stacked-2">New Admin Team:</label>
              </div>
              {newAdminTeam === '' && (
                <div class="form-group__help">
                  <span className="text-danger">
                    Please input a team for this admin
                  </span>
                </div>
              )}
              <div className="flex flex-center">
                {isLoading ? (
                  <div
                    class="loading-dots dbl-margin-top"
                    aria-label="Loading, please wait..."
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <input
                    type="submit"
                    value={isError ? 'Error' : 'Submit'}
                    className={`btn btn--large ${
                      isError ? 'btn--danger' : 'btn--primary'
                    } base-margin-top`}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      ) : (
        alert('You are not an admin')
      )}
    </div>
  );
};

export default AddAdmin;
