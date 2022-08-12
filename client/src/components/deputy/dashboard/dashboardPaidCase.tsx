import React, { useCallback } from "react";
import "./DashboardPaidCase.scss";
import CasesRecieved from "./CasesRecieved";
import CasesWaitingApproval from "./CasesWaitingApproval";
import Button from "@mui/material/Button";
import { UnlockAccess } from "../../connection/UnlockAcess";
import { Role } from "../../../model/Role";
import { useNavigate } from "react-router-dom";

function DashboardPaidCase() {

  const navigate = useNavigate();

  const onConsult = (role: Role) => {
    if (role === Role.Deputy) {
      navigate("/approval");
    }
  }

  return (
    <div id="dashboard">
      <div id="titleDashboard">
        <h2>Tableau de bord - catalogue des cas payants</h2>
      </div>
      <div id="casesBarChart">
        <div>
          <CasesWaitingApproval />
        </div>
        <div>
          <CasesRecieved />
        </div>
      </div>
      <div>
        <UnlockAccess
          role={[Role.Deputy]}
          children={
            <Button variant="contained" onClick={() => onConsult(Role.Deputy)}>
              Consulter
            </Button>
          }
        ></UnlockAccess>
      </div>
    </div>
  );
}

export default DashboardPaidCase;
