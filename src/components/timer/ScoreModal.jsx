/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GameContext } from "../../context-provider/ContextProvider";

export default function ScoreModal() {
  const [open, setOpen] = useState(true);
  const [savedWinnerData, setSavedWinnerData] = useState([]);

  const { timerHistory } = useContext(GameContext);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const rawData = localStorage.getItem("winnerData");
      const data = JSON.parse(rawData);
      if (data && Array.isArray(data)) {
        setSavedWinnerData(data);
      }
    } catch (error) {
      console.error("Error parsing winner data:", error);
    }
  }, []);

  console.log(savedWinnerData);

  const renderScores = (scores) => (
    <ul>
      {scores.map((score, index) => (
        <li
          key={index}
          className="text-indigo-900 text-center text-lg text-pretty"
        >{`Player: ${score.player} - Time: ${score.time}`}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 15,
            boxShadow: 24,
            p: 4,
            outline: "none",
            overflow: "auto",
          }}
        >
          {timerHistory && timerHistory.length > 0 ? (
            renderScores(timerHistory)
          ) : savedWinnerData && savedWinnerData.length > 0 ? (
            renderScores(savedWinnerData)
          ) : (
            <p className="flex justify-center">No Information to display</p>
          )}
        </Box>
      </Modal>
    </>
  );
}
